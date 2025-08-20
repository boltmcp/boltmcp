import { z } from "zod"

export const inputParamsSchema = {
  "pool_address": z.string().describe("Pool/pair contract address (base58 format)"),
  "after_time": z.number().int().describe("Unix timestamp - start time for data range"),
  "before_time": z.number().int().describe("Unix timestamp - end time for data range"),
  "interval": z.enum(["1m","5m","15m","30m","1h","2h","4h","6h","8h","12h","1d","3d","1w"]).describe("Time interval for OHLCV data aggregation")
}