import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "receiptId": z.string().describe("The receipt's id."),
  "lineItemId": z.string().describe("The line item's id.")
}