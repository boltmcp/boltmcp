import { z } from "zod"

export const inputParamsSchema = {
  "token_address": z.string().regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]{32,44}$")).describe("Token program address (base58-44 string). See tokens for valid addresses."),
  "after_time": z.number().int().describe("Unix timestamp - start time for data range").optional(),
  "before_time": z.number().int().describe("Unix timestamp - end time for data range").optional(),
  "days": z.number().int().describe("Number of days to look back for transactions. Default is 1 day."),
  "tx_type": z.enum(["buy","sell","add_liquidity","remove_liquidity"]).describe("Transaction type filter: buy, sell, add_liquidity or remove_liquidity.").optional(),
  "dex": z.enum(["Meteora","Raydium CLMM","Pump.fun AMM","Orca"]).describe("Filter by DEX: Meteora , Raydium CLMM, Pump.fun AMM or Orca").optional(),
  "pool_address": z.string().regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]{32,44}$")).describe("Filter trades by pool contract address").optional(),
  "min_value_usd": z.number().describe("Minimum trade value in USD").optional(),
  "limit": z.number().int().gte(1).lte(1000).describe("Limit the number of results.").optional(),
  "offset": z.number().int().gte(0).lte(100000).describe("Offset the results, allows you to skip a number of rows before starting to return rows.").optional()
}