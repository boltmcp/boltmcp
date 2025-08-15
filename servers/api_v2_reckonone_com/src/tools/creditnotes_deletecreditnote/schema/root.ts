import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "creditNoteId": z.string().describe("The credit note's id.")
}