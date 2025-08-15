import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "invoiceId": z.string().describe("The invoice id."),
  "details": z.string().nullable().describe("Gets or sets the details of the invoice history note.").optional()
}