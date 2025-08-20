import { z } from "zod"

export const inputParamsSchema = {
  "pool_address": z.string().describe("Program ID for raydium clmm pool")
}