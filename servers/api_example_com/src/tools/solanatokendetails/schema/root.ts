import { z } from "zod"

export const inputParamsSchema = {
  "token_address": z.string().regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]{32,44}$")).describe("The Solana token program address (base58 string)")
}