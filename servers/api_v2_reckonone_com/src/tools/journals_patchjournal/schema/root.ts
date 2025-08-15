import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "journalId": z.string().describe("The journal's id."),
  "summary": z.string().nullable().describe("Summary of the journal.").optional(),
  "journalDate": z.string().datetime({ offset: true }).describe("The date of the journal.").optional(),
  "amountTaxStatus": z.enum(["NonTaxed","Inclusive","Exclusive"]).describe("The tax status of an amount.").describe("The amount tax status of the amounts in the journal.").optional(),
  "description": z.string().nullable().describe("Description of the journal.").optional(),
  "adjustingJournal": z.boolean().nullable().describe("Whether this is an adjusting journal.").optional()
}