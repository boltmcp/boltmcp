import { z } from "zod"

export const inputParamsSchema = {
  "token_address": z.string().describe("Token contract address (base58 format) to search pools for"),
  "limit": z.number().int().gte(1).lte(1000).describe("Limit the number of results.").optional(),
  "offset": z.number().int().gte(0).lte(100000).describe("Offset the results, allows you to skip a number of rows before starting to return rows.").optional()
}