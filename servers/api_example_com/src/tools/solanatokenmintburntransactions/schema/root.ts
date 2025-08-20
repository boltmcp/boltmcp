import { z } from "zod"

export const inputParamsSchema = {
  "token_address": z.string().describe("SPL token mint address (base58 format, 44 characters)"),
  "after_time": z.number().int().describe("Unix timestamp - only return transactions after this time"),
  "before_time": z.number().int().describe("Unix timestamp - only return transactions before this time"),
  "limit": z.number().int().gte(1).lte(1000).describe("Limit the number of results.").optional(),
  "offset": z.number().int().gte(0).lte(100000).describe("Offset the results, allows you to skip a number of rows before starting to return rows.").optional(),
  "order_asc": z.string().describe("List of column names to order by in ascending order divided by comma. Leave empty items to combine with descending order").optional(),
  "order_desc": z.string().describe("List of column names to order by in descending order divided by comma. Leave empty items to combine with ascending order").optional()
}