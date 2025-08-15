import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "expenseClaimId": z.string().describe("The expense claim's id."),
  "lineItemId": z.string().describe("The id of the line item to update."),
  "lineNumber": z.number().int().nullable().describe("The line number.").optional(),
  "date": z.string().datetime({ offset: true }).nullable().describe("The date of the line item.").optional(),
  "project": z.string().nullable().describe("The id or full name of the project that the line item relates to.\nNote that the full name includes the name(s) of any parent project(s) separated by colons.").optional(),
  "supplier": z.string().nullable().describe("The supplier that the line item relates to.").optional(),
  "customer": z.string().nullable().describe("The customer that the line item relates to.").optional(),
  "isBillable": z.boolean().nullable().describe("Whether the line item is billable to the customer.").optional(),
  "billableStatus": z.enum(["Unbillable","Billable","Invoiced","Billed"]).describe("The billable status.").nullable().describe("The billable status of the line item.").optional(),
  "itemDetails": z.object({ "item": z.string().nullable().describe("The id or full name of the item that the expense claim line relates to.\nNote that the full name includes the name(s) of any parent item(s) separated by colons.").optional(), "price": z.number().nullable().describe("The price of each item.").optional(), "quantity": z.number().nullable().describe("The quantity sold.").optional() }).strict().describe("Details of an item used on an expense claim line item.").nullable().describe("Details of an item used on an expense claim line item.\nThis must be omitted if `accountDetails` have been provided.").optional(),
  "accountDetails": z.object({ "ledgerAccount": z.string().nullable().describe("The id or full name of the ledger account that the expense claim line relates to.\nNote that the full name includes the name(s) of any parent account(s) separated by colons.").optional(), "quantity": z.number().nullable().describe("The quantity purchased.").optional(), "amount": z.number().nullable().describe("The amount including or excluding tax (depending on the expense claim's `amountTaxStatus`).").optional() }).strict().describe("Details of an account used on an expense claim line item.").nullable().describe("Details of an account used on an expense claim line item.\nThis must be omitted if `itemDetails` have been provided.").optional(),
  "description": z.string().nullable().describe("The description of the expense.").optional(),
  "taxAmount": z.number().nullable().describe("The tax amount.").optional(),
  "taxRate": z.string().nullable().describe("The tax rate.").optional(),
  "taxIsModified": z.boolean().nullable().describe("Whether the tax amount has been modified.").optional(),
  "notes": z.string().nullable().describe("Notes relating to the expense.").optional()
}