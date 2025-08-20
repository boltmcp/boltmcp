import { z } from "zod"

export const inputParamsSchema = {
  "token_address": z.string().describe("The token address to analyze")
}