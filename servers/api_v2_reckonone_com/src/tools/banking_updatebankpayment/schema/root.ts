import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "bankPaymentId": z.string().describe("The bank payment's id."),
  "paymentDate": z.string().datetime({ offset: true }).min(1).describe("Date of the payment."),
  "reference": z.string().min(1).max(18).describe("Bank payment reference."),
  "lineItems": z.array(z.object({ "paymentId": z.string().describe("Id of payment to include in bank payment.").optional(), "lineId": z.string().nullable().describe("Id of bank payment line item.").optional() }).strict().describe("Payment to include in bank payment.")).describe("Payments to update in bank payment."),
  "treatWarningsAsErrors": z.boolean().describe("When true, validation will return bad request error.").optional()
}