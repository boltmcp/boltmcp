import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "invoiceId": z.string().describe("The invoice's id."),
  "lineItemId": z.string().describe("The id of the line item to delete."),
  "ignoreWarnings": z.boolean().describe("Ignore warnings").optional()
}