import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "classificationsEnabled": z.boolean().nullable().describe("Indiciates whether classifications is enabled.").optional()
}