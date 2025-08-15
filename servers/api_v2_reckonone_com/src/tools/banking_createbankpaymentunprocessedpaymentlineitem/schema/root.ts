import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "bankPaymentId": z.string().describe("The bank payment's id."),
  "paymentId": z.string().describe("Id of payment to include in bank payment.").optional()
}