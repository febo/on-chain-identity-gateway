use anchor_lang::prelude::*;

use crate::constants::GATEKEEPER_SEED;
use crate::errors::GatekeeperErrors;
use crate::state::{Gatekeeper, GatekeeperNetwork, GatekeeperState, NetworkKeyFlags};

// Allows a network to set the state of a gatekeeper (Active, Frozen, Halted)
pub fn set_gatekeeper_state(
    ctx: Context<SetGatekeeperStateAccount>,
    state: GatekeeperState,
) -> Result<()> {
    let gatekeeper = &mut ctx.accounts.gatekeeper;

    gatekeeper.set_gatekeeper_state(&state)?;

    Ok(())
}

#[derive(Accounts, Debug)]
#[instruction(state: GatekeeperState)]
pub struct SetGatekeeperStateAccount<'info> {
    #[account(
    mut,
    seeds = [GATEKEEPER_SEED, gatekeeper.subject.key().as_ref(), gatekeeper.gatekeeper_network.key().as_ref()],
    bump = gatekeeper.gatekeeper_bump,
    )]
    pub gatekeeper: Account<'info, Gatekeeper>,
    #[account(constraint = authority.key() == network.key())]
    pub authority: Signer<'info>,
    #[account(constraint = network.can_access(& authority, NetworkKeyFlags::AUTH) @ GatekeeperErrors::InsufficientAccessAuthKeys)]
    pub network: Account<'info, GatekeeperNetwork>,
}
