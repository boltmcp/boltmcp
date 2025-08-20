import { z } from "zod"

export const inputParamsSchema = {
  "chain_id": z.number().int().gte(1).lte(100000).describe("Chain ID. See chains for valid IDs.")
}