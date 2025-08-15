import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "ledgerAccount": z.string().min(1).describe("Id or name of bank account."),
  "paymentDate": z.string().datetime({ offset: true }).min(1).describe("Date of the payment."),
  "reference": z.string().min(1).max(18).describe("Bank payment reference."),
  "lineItems": z.array(z.object({ "paymentId": z.string().describe("Id of payment to include in bank payment.").optional() }).strict().describe("Payment to include in bank payment.")).describe("Payments to include in bank payment."),
  "treatWarningsAsErrors": z.boolean().describe("When true, validation will return bad request error.").optional(),
  "ignoreWarnings": z.boolean().nullable().describe("When true, warning validations will be skipped.").optional()
}