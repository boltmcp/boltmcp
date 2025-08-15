import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "suppliercreditnoteId": z.string().describe("The supplier credit note's id."),
  "linkId": z.string().describe("The link's id.")
}