import { z } from "zod"

export const inputParamsSchema = {
  "token_address": z.string().describe("Solana token mint address (base58 format). Example: So11111111111111111111111111111111111111112"),
  "unixtime": z.number().int().describe("Unix timestamp to query price for (0 to 10000000000). Example: 1726700000")
}