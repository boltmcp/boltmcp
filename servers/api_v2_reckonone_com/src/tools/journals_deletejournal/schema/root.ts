import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "journalId": z.string().describe("The journal's id.")
}