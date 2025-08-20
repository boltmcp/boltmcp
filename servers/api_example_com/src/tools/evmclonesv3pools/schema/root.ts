import { z } from "zod"

export const inputParamsSchema = {
  "chain_id": z.number().int().gte(1).lte(100000).describe("Chain ID. See chains for valid IDs."),
  "token_address": z.string().regex(new RegExp("^0x[a-fA-F0-9]{40}$")).describe("Pool token address. See tokens for valid addresses.").optional(),
  "order_asc": z.string().describe("List of column names to order by in ascending order divided by comma. Leave empty items to combine with descending order").optional(),
  "order_desc": z.string().describe("List of column names to order by in descending order divided by comma. Leave empty items to combine with ascending order").optional()
}