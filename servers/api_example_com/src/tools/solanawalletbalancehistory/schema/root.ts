import { z } from "zod"

export const inputParamsSchema = {
  "wallet_address": z.string().describe("Solana wallet address (base58 format, 32-44 characters)"),
  "token_address": z.string().describe("Filter by specific token address (base58 format)"),
  "after_time": z.number().int().describe("Unix timestamp - start time for data range"),
  "before_time": z.number().int().describe("Unix timestamp - end time for data range"),
  "limit": z.number().int().gte(1).lte(1000).describe("Limit the number of results.").optional(),
  "offset": z.number().int().gte(0).lte(100000).describe("Offset the results, allows you to skip a number of rows before starting to return rows.").optional(),
  "order_asc": z.string().describe("List of column names to order by in ascending order divided by comma. Leave empty items to combine with descending order").optional(),
  "order_desc": z.string().describe("List of column names to order by in descending order divided by comma. Leave empty items to combine with ascending order").optional()
}