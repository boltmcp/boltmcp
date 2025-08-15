import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "supplierCreditNoteId": z.string().describe("The supplier credit note's id."),
  "supplier": z.string().nullable().describe("The supplier name.").optional(),
  "supplierCreditNoteDate": z.string().datetime({ offset: true }).nullable().describe("The date of the supplier credit note.").optional(),
  "amountTaxStatus": z.enum(["NonTaxed","Inclusive","Exclusive"]).describe("The tax status of an amount.").describe("The amount tax status of the amounts in the supplier credit note.").optional(),
  "status": z.enum(["Draft","Approved"]).describe("The status of supplier credit note.").describe("The status of the supplier credit note.").optional(),
  "reference": z.string().nullable().describe("The supplier credit note reference.").optional(),
  "classification": z.string().nullable().describe("The classification.").optional(),
  "template": z.string().nullable().describe("The template used to print or email the supplier credit note.").optional(),
  "notes": z.string().nullable().describe("Notes related to the supplier credit note.").optional()
}