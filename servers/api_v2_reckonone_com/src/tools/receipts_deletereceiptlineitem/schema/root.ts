import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "receiptId": z.string().describe("The receipt's id."),
  "lineId": z.string().describe("The receipt's line item id.")
}