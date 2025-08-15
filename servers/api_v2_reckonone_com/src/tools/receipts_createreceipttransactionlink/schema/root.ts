import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "receiptId": z.string().describe("The receipt's id."),
  "transactionId": z.string().min(1).describe("The unique id of the linked transaction."),
  "transactionAmount": z.number().describe("The total amount of the transaction."),
  "transactionType": z.enum(["Estimate","Expense","Timesheet","Receipt","CreditNote","Payment","Invoice","Journal","Bill","PayRun","ReversedJournal","ReversalJournal","BankPayment","SupplierCreditNote","ExpenseLineItem","JournalLineItem"]).describe("Type of transaction linked to an invoice or bill.").describe("The type of linked transaction.")
}