import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "invoiceId": z.string().describe("The invoice's id."),
  "lineItemId": z.string().describe("The line item's id."),
  "ignoreWarnings": z.boolean().describe("Ignore warnings").optional(),
  "lineNumber": z.number().int().describe("The line number."),
  "serviceDate": z.string().datetime({ offset: true }).nullable().describe("The date when the service was provided.").optional(),
  "project": z.string().nullable().describe("The id or full name of the project that the line item relates to.\nNote that the full name includes the name(s) of any parent project(s) separated by colons.").optional(),
  "itemDetails": z.object({ "item": z.string().min(1).describe("The id or full name of the item that the line relates to.\nNote that the full name includes the name(s) of any parent item(s) separated by colons."), "price": z.number().nullable().describe("The price of each item including or excluding tax (depending on the `amountTaxStatus`)."), "quantity": z.number().nullable().describe("The quantity purchased."), "discountAmount": z.number().nullable().describe("The total discount for the line item."), "discountPercent": z.number().nullable().describe("The discount percentage for the line item."), "billableId": z.string().nullable().describe("The id related to a billable line item.").optional() }).strict().describe("Details of an item used on an invoice line item.").nullable().describe("Details of an item used on an invoice line item.\nThis must be omitted if `accountDetails` have been provided.").optional(),
  "accountDetails": z.object({ "ledgerAccount": z.string().min(1).describe("The id or full name of the ledger account that the line relates to.\nNote that the full name includes the name(s) of any parent account(s) separated by colons."), "quantity": z.number().nullable().describe("The quantity purchased."), "amount": z.number().nullable().describe("The amount including or excluding tax (depending on the `amountTaxStatus`).") }).strict().describe("Details of an account used on an invoice line item.").nullable().describe("Details of an account used on an invoice line item.\nThis must be omitted if `itemDetails` have been provided.").optional(),
  "description": z.string().nullable().describe("The description of the line.").optional(),
  "taxAmount": z.number().nullable().describe("The tax amount.").optional(),
  "taxRate": z.string().nullable().describe("The tax rate.").optional(),
  "taxIsModified": z.boolean().nullable().describe("Whether the tax amount has been modified.").readonly().optional(),
  "isFullWidthDescription": z.boolean().nullable().describe("Whether the line item is a full width description only item.").optional(),
  "parentLineId": z.string().nullable().describe("Parent id of line item if RowType is set to Data").optional(),
  "rowType": z.enum(["Data","Group"]).describe("The line item row type.").nullable().describe("Row type of line item.").optional(),
  "group": z.object({ "printAsSingleLine": z.boolean().nullable().optional(), "key": z.string().nullable().optional() }).strict().describe("Details of an invoice line item to create or update.").nullable().describe("Grup details when RowType is set to Group").optional(),
  "transactionLinks": z.array(z.object({ "transactionType": z.enum(["Estimate","Expense","Timesheet","Receipt","CreditNote","Payment","Invoice","Journal","Bill","PayRun","ReversedJournal","ReversalJournal","BankPayment","SupplierCreditNote","ExpenseLineItem","JournalLineItem"]).describe("Type of transaction linked to an invoice or bill.").describe("The transaction type.").optional(), "transactionId": z.string().describe("The transaction id.").optional() }).strict().describe("Details of invoice line item transaction links to create or update.")).nullable().describe("Details of transactions that are linked to the invoice.").optional()
}