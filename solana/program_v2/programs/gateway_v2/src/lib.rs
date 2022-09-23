mod constants;
mod errors;
mod instructions;
mod state;
mod util;

use crate::instructions::*;
use crate::state::*;
use anchor_lang::prelude::*;
use anchor_lang::{AnchorDeserialize, AnchorSerialize};
// TODO: Grind for better key
declare_id!("FSgDgZoNxiUarRWJYrMDWcsZycNyEXaME5i3ZXPnhrWe");

#[program]
pub mod gateway_v2 {
    use super::*;

    pub fn create_network(
        ctx: Context<CreateNetworkAccount>,
        data: CreateNetworkData,
    ) -> Result<()> {
        instructions::create_network(
            *ctx.accounts.authority.key,
            *ctx.bumps.get("network").unwrap(),
            data,
            &mut ctx.accounts.network,
        )
    }

    pub fn update_network(
        ctx: Context<UpdateNetworkAccount>,
        data: UpdateNetworkData,
    ) -> Result<()> {
        instructions::update_network(
            &data,
            &mut ctx.accounts.network,
            &mut ctx.accounts.authority,
        )
    }

    pub fn close_network(_ctx: Context<CloseNetworkAccount>) -> Result<()> {
        instructions::close_network()
    }

    pub fn create_gatekeeper(
        ctx: Context<CreateGatekeeperAccount>,
        data: CreateGatekeeperData,
    ) -> Result<()> {
        instructions::create_gatekeeper(
            *ctx.accounts.authority.key,
            *ctx.bumps.get("gatekeeper").unwrap(),
            data,
            &mut ctx.accounts.gatekeeper,
        )
        // TODO: add instruction to add gatekeeper pubkey to gatekeeper_network
    }

    pub fn update_gatekeeper(
        ctx: Context<UpdateGatekeeperAccount>,
        data: UpdateGatekeeperData,
    ) -> Result<()> {
        instructions::update_gatekeeper(
            &data,
            &mut ctx.accounts.gatekeeper,
            &mut ctx.accounts.authority,
        )
    }

    pub fn close_gatekeeper(_ctx: Context<CloseGatekeeperAccount>) -> Result<()> {
        instructions::close_gatekeeper()
    }
    pub fn set_gatekeeper_state(
        _ctx: Context<SetGatekeeperStateAccount>,
        state: GatekeeperState,
    ) -> Result<()> {
        instructions::set_gatekeeper_state(
            &state,
            &mut _ctx.accounts.gatekeeper,
            &mut _ctx.accounts.authority,
        )
    }
    pub fn gatekeeper_withdraw(
        _ctx: Context<GatekeeperWithdrawAccount>,
        receiver: Pubkey,
    ) -> Result<()> {
        instructions::gatekeeper_withdraw(
            receiver,
            &mut _ctx.accounts.gatekeeper,
            &mut _ctx.accounts.authority,
        )
    }
}
