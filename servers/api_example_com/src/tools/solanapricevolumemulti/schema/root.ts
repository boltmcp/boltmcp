import { z } from "zod"

export const inputParamsSchema = {
  "token_addresses": z.string().describe("Comma-separated SPL token mint addresses (max 50, base58)"),
  "timeframe": z.string().describe("Timeframe: 1h, 2h, 4h, 8h, 24h")
}