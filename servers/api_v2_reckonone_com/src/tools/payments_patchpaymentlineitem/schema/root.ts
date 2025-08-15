import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "paymentId": z.string().describe("The payment's id."),
  "lineId": z.string().describe("The id of the line item to update."),
  "lineNumber": z.number().int().nullable().describe("The line number.").optional(),
  "project": z.string().nullable().describe("The id or full name of the project that the line item relates to.\nNote that the full name includes the name(s) of any parent project(s) separated by colons.").optional(),
  "itemDetails": z.object({ "item": z.string().nullable().describe("The id or full name of the item that the invoice line relates to.\nNote that the full name includes the name(s) of any parent item(s) separated by colons.").optional(), "price": z.number().nullable().describe("The price of each item including or excluding tax (depending on the invoice's `amountTaxStatus`).").optional(), "quantity": z.number().nullable().describe("The quantity purchased.").optional(), "discountAmount": z.number().nullable().describe("The total discount for the line item.").optional(), "discountPercent": z.number().nullable().describe("The discount percentage for the line item.").optional(), "billableId": z.string().nullable().describe("The id related to a billable line item.").optional() }).strict().describe("Details of an item used on an payment line item.").nullable().describe("Details of an item used on an payment line item.\nThis must be omitted if `accountDetails` have been provided.").optional(),
  "accountDetails": z.object({ "ledgerAccount": z.string().nullable().describe("The id or full name of the ledger account that the invoice line relates to.\nNote that the full name includes the name(s) of any parent account(s) separated by colons.").optional(), "quantity": z.number().nullable().describe("The quantity purchased.").optional(), "amount": z.number().nullable().describe("The amount including or excluding tax (depending on the invoice's `amountTaxStatus`).").optional() }).strict().describe("Details of an account used on an payment line item.").nullable().describe("Details of an account used on an payment line item.\nThis must be omitted if `itemDetails` have been provided.").optional(),
  "description": z.string().nullable().describe("The description of the line.").optional(),
  "taxAmount": z.number().nullable().describe("The tax amount.").optional(),
  "taxRate": z.string().nullable().describe("The tax rate.").optional()
}