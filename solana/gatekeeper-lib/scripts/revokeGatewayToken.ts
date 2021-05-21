import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { SOLANA_COMMITMENT } from "../src/util/constants";
import { GatekeeperNetworkService } from "../src/service/GatekeeperNetworkService";
import { GatekeeperService } from "../src/service/GatekeeperService";
import { homedir } from "os";
import * as path from "path";
import { argv } from "yargs";
/**
 * Usage: ts-node ./scripts/revokeGatewayToken.ts
 */
const mySecretKey = require(path.join(
  homedir(),
  ".config",
  "solana",
  "id.json"
));
const myKeypair = Keypair.fromSecretKey(Buffer.from(mySecretKey));

const connection = new Connection("http://localhost:8899", SOLANA_COMMITMENT);

const gatekeeperNetwork = myKeypair;
const payer = myKeypair;
const gatekeeperNetworkService = new GatekeeperNetworkService(
  connection,
  payer,
  gatekeeperNetwork
);

(async function () {
  const gatekeeperAuthority = Keypair.generate();
  const gatekeeperAccount = await gatekeeperNetworkService.addGatekeeper(
    gatekeeperAuthority.publicKey
  );

  console.log("gatekeeperAccount", gatekeeperAccount.toBase58());
  /**
   * private connection: Connection,
      private payer: Keypair,
      private gatekeeperNetwork: Keypair,
      private gatekeeperAccount: PublicKey,
      private gatekeeperAuthority: PublicKey
  */
  const gatekeeperService = new GatekeeperService(
    connection,
    payer,
    gatekeeperNetwork.publicKey,
    gatekeeperAuthority
  );
  const owner = argv.owner
    ? new PublicKey(argv.owner as string)
    : Keypair.generate().publicKey;

  console.log("owner", owner.toBase58());
  const issuedRecord = await gatekeeperService.issue(owner, {});
  console.log("issuedRecord", issuedRecord.token);
  console.log(`revoking ${issuedRecord.token}...`);
  const revokedTokenRecord = await gatekeeperService.revoke(
    new PublicKey(issuedRecord.token)
  );
  console.log("revokedTokenRecord", revokedTokenRecord);
})().catch((error) => console.error(error));
