import { z } from "zod"

export const inputParamsSchema = {
  "pool_address": z.string().regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]{32,44}$")).describe("Pool address (base58-44 string) to get transaction history for"),
  "days": z.number().int().describe("Number of days to look back for transactions. Default is 1 day."),
  "limit": z.number().int().gte(1).lte(1000).describe("Limit the number of results.").optional(),
  "offset": z.number().int().gte(0).lte(100000).describe("Offset the results, allows you to skip a number of rows before starting to return rows.").optional()
}