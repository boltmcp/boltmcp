import { z } from "zod"

export const inputParamsSchema = {
  "token_address": z.string().describe("SPL token mint address (base58)"),
  "interval": z.enum(["24 HOUR","12 HOUR","1 HOUR","30 MINUTE"]).describe("Lookback window for trades (SQL Interval, e.g. '24 HOUR', '12 HOUR', '1 HOUR', '30 MINUTE')")
}