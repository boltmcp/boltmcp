import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "invoiceId": z.string().describe("The invoice's id."),
  "transactionType": z.enum(["Invoice","Bill","SupplierCreditNote","CreditNote","JournalEntryPayable","JournalEntryReceivable","Payment","Receipt","Expense"]).describe("Types of transactions that can be allocated.").describe("The type of transaction to link."),
  "transactionId": z.string().min(1).describe("The id of the transaction to link."),
  "amount": z.number().describe("The amount.")
}