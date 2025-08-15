import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "bankPaymentId": z.string().describe("The bank payment's id."),
  "paymentDate": z.string().datetime({ offset: true }).describe("Date of the payment.").optional(),
  "reference": z.string().nullable().describe("Bank payment reference.").optional(),
  "status": z.enum(["Unprocessed","Processed"]).describe("Status of bank payment.").describe("The bank payment status.").optional()
}