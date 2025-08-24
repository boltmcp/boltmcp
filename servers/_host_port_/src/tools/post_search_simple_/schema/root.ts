import { z } from "zod"

export const inputParamsSchema = {
  "query": z.string().describe("Your search query"),
  "contextLength": z.number().describe("How much context to return around the matching string").optional()
}