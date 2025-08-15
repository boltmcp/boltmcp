import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "paymentId": z.string().describe("The payments's id."),
  "supplier": z.string().nullable().describe("The supplier.").optional(),
  "paymentDate": z.string().datetime({ offset: true }).nullable().describe("The date of the payment.").optional(),
  "ledgerAccount": z.string().nullable().describe("The id or name of the bank/cash/credit account where the money was withdrawn.").optional(),
  "paymentMethod": z.string().nullable().describe("The id or name of the payment method used.").optional(),
  "reference": z.string().nullable().describe("The payment reference.").optional(),
  "notes": z.string().nullable().describe("Notes related to the payment.").optional(),
  "totalAmount": z.number().describe("The total amount of the bill.").optional(),
  "reconciliationStatus": z.enum(["Uncleared","Cleared","Reconciled"]).describe("Reconciliation status.").nullable().describe("The payment's reconciliation status.\nNote that this can only be initially set to Cleared or Uncleared and that it can only be updated via a bank reconciliation.").optional(),
  "internalNotes": z.string().nullable().describe("Internal Notes related to the payment.").optional(),
  "classification": z.string().nullable().describe("The classification.").optional()
}