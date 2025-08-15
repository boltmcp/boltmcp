import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "supplierCreditNoteId": z.string().describe("The supplier credit note's id."),
  "lineNumber": z.number().int().describe("The line number."),
  "project": z.string().nullable().describe("The id or full name of the project that the line item relates to.\nNote that the full name includes the name(s) of any parent project(s) separated by colons.").optional(),
  "itemDetails": z.object({ "item": z.string().min(1).describe("The id or full name of the item that the line relates to.\nNote that the full name includes the name(s) of any parent item(s) separated by colons."), "price": z.number().nullable().describe("The price of each item including or excluding tax (depending on the `amountTaxStatus`)."), "quantity": z.number().nullable().describe("The quantity purchased.") }).strict().describe("Details of an item used on an supplier credit note line item.").nullable().describe("Details of an item used on a supplier credit note line item.\nThis must be omitted if `accountDetails` have been provided.").optional(),
  "accountDetails": z.object({ "ledgerAccount": z.string().min(1).describe("The id or full name of the ledger account that the line relates to.\nNote that the full name includes the name(s) of any parent account(s) separated by colons."), "quantity": z.number().nullable().describe("The quantity purchased."), "amount": z.number().nullable().describe("The amount including or excluding tax (depending on the `amountTaxStatus`).") }).strict().describe("Details of an account used on an supplier credit note line item.").nullable().describe("Details of an account used on a supplier credit note line item.\nThis must be omitted if `itemDetails` have been provided.").optional(),
  "description": z.string().nullable().describe("The description of the line.").optional(),
  "taxRate": z.string().nullable().describe("The tax rate.").optional(),
  "taxAmount": z.number().nullable().describe("The tax amount.").optional()
}