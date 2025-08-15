import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "creditNoteId": z.string().describe("The credit note's id."),
  "customer": z.string().nullable().describe("The customer that the credit note will be issued to.").optional(),
  "creditNoteDate": z.string().datetime({ offset: true }).nullable().describe("The date of the credit note.").optional(),
  "status": z.enum(["Draft","Approved","Closed"]).describe("The status of a credit note.").nullable().describe("The status of the credit note.\n_Note:_ This cannot be set via the POST or PUT endpoints. Please use the PATCH endpoint instead.").optional(),
  "reference": z.string().nullable().describe("The credit note reference.").optional(),
  "accountsReceivableLedgerAccount": z.string().nullable().describe("The accounts receivable ledger account.\n_Note:_ It is not currently possible to create multiple Accounts Receivable accounts so this field is read-only and will be ignored.").readonly().optional(),
  "classification": z.string().nullable().describe("The classification.").optional(),
  "template": z.string().nullable().describe("The template used to print or email the credit note.").optional(),
  "notes": z.string().nullable().describe("Notes related to the credit note.").optional()
}