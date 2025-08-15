import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "estimateId": z.string().describe("The estimate's id."),
  "customer": z.string().nullable().describe("The id or name of the customer that is being quoted.").optional(),
  "estimateDate": z.string().datetime({ offset: true }).nullable().describe("The date of the estimate.").optional(),
  "estimateExpiryDate": z.string().datetime({ offset: true }).nullable().describe("The date the estimate expires on.").optional(),
  "amountTaxStatus": z.enum(["NonTaxed","Inclusive","Exclusive"]).describe("The tax status of an amount.").nullable().describe("The amount tax status of the amounts in the estimate.").optional(),
  "status": z.enum(["Draft","Pending","Accepted","Declined","ClosedDeclined","ClosedInvoiced"]).describe("The status of an estimate.").nullable().describe("The status of the estimate.").optional(),
  "reference": z.string().nullable().describe("The estimate reference.").optional(),
  "classification": z.string().nullable().describe("The id or name of the classification.").optional(),
  "template": z.string().nullable().describe("The id or name of the template used to print or email the estimate.").optional(),
  "notes": z.string().nullable().describe("Notes related to the estimate.").optional(),
  "termsAndConditions": z.string().nullable().describe("Terms and conditions.").optional(),
  "paymentNotes": z.string().nullable().describe("Payment notes.").optional()
}