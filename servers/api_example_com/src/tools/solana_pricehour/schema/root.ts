import { z } from "zod"

export const inputParamsSchema = {
  "token_address": z.string().regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]{32,44}$")).describe("Token program address (base58-44 string). See tokens for valid addresses."),
  "interval": z.enum(["1h","2h","4h","6h","8h","12h","1D","3D","1W","1M"]).describe("Time interval for price aggregation. One of: 1H, 2H, 4H, 6H, 8H, 12H, 1D, 3D, 1W, 1M."),
  "limit": z.number().int().gte(1).lte(1000).describe("Limit the number of results.").optional(),
  "offset": z.number().int().gte(0).lte(100000).describe("Offset the results, allows you to skip a number of rows before starting to return rows.").optional()
}