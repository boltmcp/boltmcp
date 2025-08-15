import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "invoiceId": z.string().describe("The invoice's id."),
  "attachmentId": z.string().describe("The attachment's id."),
  "isShareable": z.boolean().nullable().describe("Whether the attachment is shareable").optional()
}