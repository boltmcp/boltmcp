import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "journalId": z.string().describe("The journal's id."),
  "summary": z.string().nullable().describe("Summary of the journal.").optional(),
  "journalDate": z.string().datetime({ offset: true }).min(1).describe("The date of the journal reversal."),
  "description": z.string().nullable().describe("Description of the journal reversal.").optional()
}