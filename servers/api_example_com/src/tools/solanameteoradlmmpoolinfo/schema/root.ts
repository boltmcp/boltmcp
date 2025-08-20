import { z } from "zod"

export const inputParamsSchema = {
  "pool_address": z.string().describe("Pool identifier")
}