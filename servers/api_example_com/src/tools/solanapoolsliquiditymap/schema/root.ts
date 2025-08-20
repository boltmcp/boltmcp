import { z } from "zod"

export const inputParamsSchema = {
  "pool_address": z.string().describe("The public key address of the Orca Whirlpool."),
  "resolution": z.number().int().gte(10).lte(1000).describe("The approximate number of data points (tick intervals) desired in the output map. Higher values mean finer granularity.")
}