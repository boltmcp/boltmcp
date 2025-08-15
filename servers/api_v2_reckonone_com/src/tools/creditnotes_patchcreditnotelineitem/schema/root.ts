import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "creditNoteId": z.string().describe("The credit note's id."),
  "lineItemId": z.string().describe("The credit note line item's id."),
  "lineNumber": z.number().int().nullable().describe("The line number.").optional(),
  "project": z.string().nullable().describe("The id or full name of the project that the line item relates to.\nNote that the full name includes the name(s) of any parent project(s) separated by colons.").optional(),
  "itemDetails": z.object({ "item": z.string().nullable().describe("The id or full name of the item that the line relates to.\nNote that the full name includes the name(s) of any parent item(s) separated by colons.").optional(), "price": z.number().nullable().describe("The price of each item including or excluding tax (depending on the `amountTaxStatus`).").optional(), "quantity": z.number().nullable().describe("The quantity purchased.").optional() }).strict().describe("Details of an item used on a credit note line item.").nullable().describe("Details of an item used on an invoice line item.\nThis must be omitted if `accountDetails` have been provided.").optional(),
  "accountDetails": z.object({ "ledgerAccount": z.string().nullable().describe("The id or full name of the ledger account that the line relates to.\nNote that the full name includes the name(s) of any parent account(s) separated by colons.").optional(), "quantity": z.number().nullable().describe("The quantity purchased.").optional(), "amount": z.number().nullable().describe("The amount including or excluding tax (depending on the `amountTaxStatus`).").optional() }).strict().describe("Details of an account used on a credit note line item.").nullable().describe("Details of an account used on an invoice line item.\nThis must be omitted if `itemDetails` have been provided.").optional(),
  "description": z.string().nullable().describe("The description of the line.").optional(),
  "taxAmount": z.number().nullable().describe("The tax amount.").optional(),
  "taxRate": z.string().nullable().describe("The tax rate.").optional(),
  "taxIsModified": z.boolean().nullable().describe("Whether the tax amount has been modified.").optional()
}