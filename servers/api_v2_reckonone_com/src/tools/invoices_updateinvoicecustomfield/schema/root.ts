import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "invoiceId": z.string().describe("The invoice's id."),
  "type": z.string().describe("The custom field id or name."),
  "value": z.string().nullable().describe("The value of custom field.").optional()
}