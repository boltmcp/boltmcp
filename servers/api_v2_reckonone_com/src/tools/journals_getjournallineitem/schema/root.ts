import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "journalId": z.string().describe("The journals's id."),
  "lineItemId": z.string().describe("The line item's id.")
}