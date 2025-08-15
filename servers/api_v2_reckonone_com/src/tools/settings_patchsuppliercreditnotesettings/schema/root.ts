import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "prefix": z.string().nullable().describe("The supplier credit note prefix.").optional(),
  "defaultTemplate": z.string().nullable().describe("The default supplier credit note template.").optional()
}