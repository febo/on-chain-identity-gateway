use anchor_lang::prelude::*;
use anchor_spl::token_interface::{Mint, TokenAccount, TokenInterface};

use crate::constants::{GATEKEEPER_SEED, PASS_SEED};
use crate::errors::{GatekeeperErrors, NetworkErrors};
use crate::state::{Gatekeeper, GatekeeperKeyFlags, GatekeeperNetwork, GatekeeperState, Pass};
use crate::util::{
    calculate_network_and_gatekeeper_fee, create_and_invoke_transfer, get_gatekeeper_fees,
    get_network_fees,
};

pub fn expire_pass(ctx: Context<PassExpire>) -> Result<()> {
    let pass = &mut ctx.accounts.pass;
    let network = &mut ctx.accounts.network;
    let gatekeeper = &mut ctx.accounts.gatekeeper;
    let funder = &mut ctx.accounts.funder;

    let spl_token_program = &mut ctx.accounts.spl_token_program;
    let mint_account = &mut ctx.accounts.mint;
    let network_ata = &mut ctx.accounts.network_token_account;
    let gatekeeper_ata = &mut ctx.accounts.gatekeeper_token_account;
    let funder_ata = &mut ctx.accounts.funder_token_account;

    let mint_address = mint_account.key();

    // TODO: Can we put the fee transfers into a trait and reuse dependent on the type of instruction?
    let absolute_fee = get_gatekeeper_fees(&gatekeeper.token_fees, mint_address)?.expire;
    let network_percentage = get_network_fees(&network.fees, mint_address)?.expire;
    let (network_fee, gatekeeper_fee) =
        calculate_network_and_gatekeeper_fee(absolute_fee, network_percentage);

    create_and_invoke_transfer(
        spl_token_program.to_owned(),
        funder_ata.to_owned(),
        network_ata.to_owned(),
        mint_account.to_owned(),
        funder.to_owned(),
        network_fee,
    )?;

    create_and_invoke_transfer(
        spl_token_program.to_owned(),
        funder_ata.to_owned(),
        gatekeeper_ata.to_owned(),
        mint_account.to_owned(),
        funder.to_owned(),
        gatekeeper_fee,
    )?;

    pass.expire()
}

#[derive(Accounts)]
pub struct PassExpire<'info> {
    #[account(
    seeds = [PASS_SEED, pass.subject.as_ref(), pass.network.key().as_ref(), & pass.pass_number.to_le_bytes() ],
    bump = pass.signer_bump,
    constraint = gatekeeper.can_access(& authority, GatekeeperKeyFlags::EXPIRE_PASS),
    mut
    )]
    pub pass: Box<Account<'info, Pass>>,
    #[account(
    constraint = gatekeeper.gatekeeper_network == network.key(),
    constraint = pass.network == network.key()
    )]
    pub network: Box<Account<'info, GatekeeperNetwork>>,
    #[account(
    constraint = pass.gatekeeper == gatekeeper.key(),
    seeds = [GATEKEEPER_SEED, gatekeeper.subject.as_ref(), network.key().as_ref()],
    constraint = gatekeeper.gatekeeper_state != GatekeeperState::Halted @ GatekeeperErrors::InvalidState,
    bump = gatekeeper.gatekeeper_bump
    )]
    pub gatekeeper: Box<Account<'info, Gatekeeper>>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub funder: Signer<'info>,
    pub authority: Signer<'info>,
    pub spl_token_program: Interface<'info, TokenInterface>,
    #[account(constraint = network.is_token_supported(& mint.key()) @ NetworkErrors::TokenNotSupported)]
    pub mint: InterfaceAccount<'info, Mint>,
    #[account(mut)]
    pub funder_token_account: InterfaceAccount<'info, TokenAccount>,
    #[account(
    mut,
    constraint = network_token_account.owner == * network.to_account_info().key,
    )]
    pub network_token_account: InterfaceAccount<'info, TokenAccount>,
    #[account(
    mut,
    constraint = gatekeeper_token_account.owner == * gatekeeper.to_account_info().key,
    )]
    pub gatekeeper_token_account: InterfaceAccount<'info, TokenAccount>,
}
