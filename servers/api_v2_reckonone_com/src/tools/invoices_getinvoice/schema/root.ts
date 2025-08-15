import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "invoiceId": z.string().describe("The invoice's id."),
  "format": z.string().nullable().describe("The format to use, e.g. pdf.").optional()
}