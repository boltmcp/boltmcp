import { z } from "zod"

export const inputParamsSchema = {
  "chain_id": z.number().int().gte(1).lte(100000).describe("Chain ID. See chains for valid IDs."),
  "token_address": z.string().regex(new RegExp("^0x[a-fA-F0-9]{40}$")).describe("Token address. See tokens for valid address for a chain."),
  "hours": z.number().int().gte(1).lte(1000).describe("Maximum number of hours to return")
}