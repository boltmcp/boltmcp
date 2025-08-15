import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "supplierCreditNoteId": z.string().describe("The supplier credit note's id.")
}