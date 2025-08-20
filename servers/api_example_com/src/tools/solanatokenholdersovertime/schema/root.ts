import { z } from "zod"

export const inputParamsSchema = {
  "token_address": z.string().describe("The program ID (mint address) of the token."),
  "interval": z.number().int().gte(1).describe("Block interval for sampling balances."),
  "start_block": z.number().int().describe("Starting block number for the time range."),
  "end_block": z.number().int().describe("Ending block number for the time range.")
}