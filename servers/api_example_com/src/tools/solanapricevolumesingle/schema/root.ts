import { z } from "zod"

export const inputParamsSchema = {
  "token_address": z.string().describe("SPL token mint address (base58, 44 chars)"),
  "timeframe": z.string().describe("Timeframe: 1h, 2h, 4h, 8h, 24h")
}