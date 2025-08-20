import { z } from "zod"

export const inputParamsSchema = {
  "order_by": z.enum(["price_change_percentage","volume_usd_24h","current_price_usd"]).describe("Column to sort the results by. This parameter is required."),
  "limit": z.number().int().gte(1).lte(1000).describe("Limit the number of results.").optional(),
  "offset": z.number().int().gte(0).lte(100000).describe("Offset the results, allows you to skip a number of rows before starting to return rows.").optional()
}