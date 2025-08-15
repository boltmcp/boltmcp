import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "receiptId": z.string().describe("The receipt's id."),
  "linkId": z.string().describe("The receipt's allocation link id.")
}