import { z } from "zod"

export const inputParamsSchema = {
  "pool_address": z.string().describe("The public key address of the Orca Whirlpool."),
  "days": z.number().int().gte(1).describe("The number of past days to include in the analysis (e.g., 1, 7, 30).")
}