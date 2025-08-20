import { z } from "zod"

export const inputParamsSchema = {
  "chain_id": z.number().int().gte(1).lte(100000).describe("Chain ID. See chains for valid IDs."),
  "pool_address": z.string().regex(new RegExp("^0x[a-fA-F0-9]{40}$")).describe("Pool address with 0x prefix")
}