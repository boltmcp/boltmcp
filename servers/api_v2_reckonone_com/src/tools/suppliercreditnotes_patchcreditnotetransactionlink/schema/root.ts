import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "supplierCreditNoteId": z.string().describe("The supplier credit note's id."),
  "linkId": z.string().describe("The linked transaction id."),
  "transactionAmount": z.number().describe("The total amount of the transaction. ")
}