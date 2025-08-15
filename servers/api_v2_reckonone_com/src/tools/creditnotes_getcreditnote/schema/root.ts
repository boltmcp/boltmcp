import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "creditNoteId": z.string().describe("The credit note's id."),
  "format": z.string().nullable().describe("The format to use, e.g. pdf.").optional()
}