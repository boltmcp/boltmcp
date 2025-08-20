import { z } from "zod"

export const inputParamsSchema = {
  "token_addresses": z.string().describe("Comma-separated list of Solana token program addresses (base58 strings).")
}