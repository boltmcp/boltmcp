import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "receiptId": z.string().describe("The receipt's id."),
  "customer": z.string().nullable().describe("The customer that is being invoiced.").optional(),
  "receiptDate": z.string().datetime({ offset: true }).nullable().describe("The date of the receipt.").optional(),
  "ledgerAccount": z.string().nullable().describe("The id or name of the bank/cash/credit account where the money was received.").optional(),
  "paymentMethod": z.string().nullable().describe("The id or name of the payment method used.").optional(),
  "reference": z.string().nullable().describe("The receipt reference.").optional(),
  "notes": z.string().nullable().describe("Notes related to the receipt.").optional(),
  "totalAmount": z.number().describe("The total amount of the receipt.").optional(),
  "reconciliationStatus": z.enum(["Uncleared","Cleared","Reconciled"]).describe("Reconciliation status.").nullable().describe("The receipt's reconciliation status.\nNote that this can only be initially set to Cleared or Uncleared and that it can only be updated via a bank reconciliation.").optional(),
  "internalNotes": z.string().nullable().describe("Internal Notes related to the receipt.").optional(),
  "classification": z.string().nullable().describe("The classification.").optional()
}