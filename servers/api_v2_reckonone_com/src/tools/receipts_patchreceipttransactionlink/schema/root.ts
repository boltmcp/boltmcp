import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "receiptId": z.string().describe("The receipt's id."),
  "linkId": z.string().describe("The linked transaction's id."),
  "transactionAmount": z.number().describe("The transaction's amount.").optional()
}