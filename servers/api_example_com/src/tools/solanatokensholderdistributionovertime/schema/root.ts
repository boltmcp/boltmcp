import { z } from "zod"

export const inputParamsSchema = {
  "token_address": z.string().describe("Token mint address (program id)"),
  "interval": z.number().int().gte(1).describe("Block interval to use"),
  "start_block": z.number().int().describe("Block to start from"),
  "end_block": z.number().int().describe("Block to end at")
}