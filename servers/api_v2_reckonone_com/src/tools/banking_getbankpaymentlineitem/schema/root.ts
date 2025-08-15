import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "bankPaymentId": z.string().describe("The bank payment's id"),
  "lineItemId": z.string().describe("The bank payment's line item id.")
}