import { z } from "zod"

export const inputParamsSchema = {
  "token_address": z.string().regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]{32,44}$")).describe("Token program address (base58-44 string). See tokens for valid addresses."),
  "after_time": z.number().int().describe("Unix timestamp - start time for data range"),
  "before_time": z.number().int().describe("Unix timestamp - end time for data range"),
  "limit": z.number().int().gte(1).lte(1000).describe("Limit the number of results.").optional(),
  "offset": z.number().int().gte(0).lte(100000).describe("Offset the results, allows you to skip a number of rows before starting to return rows.").optional()
}