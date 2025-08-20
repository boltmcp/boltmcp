import { z } from "zod"

export const inputParamsSchema = {
  "pool_address": z.string().describe("The program ID (address) of the Solana pool.")
}