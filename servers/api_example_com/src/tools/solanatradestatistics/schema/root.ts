import { z } from "zod"

export const inputParamsSchema = {
  "token_addresses": z.string().describe("Comma-separated token addresses"),
  "timeframe": z.string().describe("Time interval: 1h, 4h, 12h, 24h, 7d")
}