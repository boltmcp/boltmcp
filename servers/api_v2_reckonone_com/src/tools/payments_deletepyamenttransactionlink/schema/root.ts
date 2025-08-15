import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "paymentId": z.string().describe("The payment's id."),
  "linkId": z.string().describe("The linked transaction's id.")
}