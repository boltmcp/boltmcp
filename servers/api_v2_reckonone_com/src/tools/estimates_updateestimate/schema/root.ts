import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "estimateId": z.string().describe("The estimate's id."),
  "customer": z.string().min(1).describe("The id or name of the customer that is being quoted."),
  "estimateDate": z.string().datetime({ offset: true }).min(1).describe("The date of the estimate."),
  "estimateExpiryDate": z.string().datetime({ offset: true }).nullable().describe("The date the estimate expires on.").optional(),
  "amountTaxStatus": z.enum(["NonTaxed","Inclusive","Exclusive"]).describe("The tax status of an amount.").describe("The amount tax status of the amounts in the estimate."),
  "reference": z.string().max(50).nullable().describe("The estimate reference.").optional(),
  "classification": z.string().nullable().describe("The id or name of the classification.").optional(),
  "template": z.string().min(1).describe("The id or name of the template used to print or email the estimate."),
  "lineItems": z.array(z.object({ "lineNumber": z.number().int().describe("The line number."), "project": z.string().nullable().describe("The id or full name of the project that the line item relates to."), "itemDetails": z.object({ "item": z.string().min(1).describe("The id or full name of the item that the line relates to."), "description": z.string().max(1000).nullable().describe("Description of line item.").optional(), "price": z.number().nullable().describe("The price of each item.").optional(), "quantity": z.number().nullable().describe("The quantity sold.").optional() }).strict().describe("Details of an account used on an estimate line item.").describe("Details of an item used on an estimate line item."), "markupAmount": z.number().nullable().describe("The value of any markup as an amount. MarkupAmount and MarkupPercent are mutually exclusive."), "markupPercent": z.number().nullable().describe("The value of any markup as a percentage. MarkupAmount and MarkupPercent are mutually exclusive."), "taxRate": z.string().nullable().describe("The id or name of the applicate tax."), "taxAmount": z.number().nullable().describe("The tax amount.") }).strict().describe("An estimate line item.")).describe("The individual items that make up the estimate."),
  "notes": z.string().max(1000).nullable().describe("Notes related to the estimate.").optional(),
  "termsAndConditions": z.string().max(1000).nullable().describe("Terms and conditions.").optional(),
  "paymentNotes": z.string().max(1000).nullable().describe("Payment notes.").optional()
}