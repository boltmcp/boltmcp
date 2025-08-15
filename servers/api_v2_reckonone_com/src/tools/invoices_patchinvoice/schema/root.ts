import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "invoiceId": z.string().describe("The invoice's id."),
  "ignoreWarnings": z.boolean().describe("Ignore warnings").optional(),
  "customer": z.string().nullable().describe("The customer that is being invoiced.").optional(),
  "invoiceDate": z.string().datetime({ offset: true }).nullable().describe("The date of the invoice.").optional(),
  "dueDate": z.string().datetime({ offset: true }).nullable().describe("The date payment is due by.").optional(),
  "invoiceDiscountAmount": z.number().nullable().describe("The invoice discount amount.").optional(),
  "invoiceDiscountPercent": z.number().nullable().describe("The invoice discount percentage.").optional(),
  "status": z.enum(["Draft","Approved","Paid"]).describe("The status of an invoice.").nullable().describe("The status of the invoice.").optional(),
  "paymentTerms": z.string().nullable().describe("Payment terms.").optional(),
  "reference": z.string().nullable().describe("The invoice reference.").optional(),
  "purchaseOrderNumber": z.string().nullable().describe("The purchase order number.").optional(),
  "accountsReceivableLedgerAccount": z.string().nullable().describe("The accounts receivable ledger account.\n_Note:_ It is not currently possible to create multiple Accounts Receivable accounts so this field is read-only and will be ignored.").readonly().optional(),
  "classification": z.string().nullable().describe("The classification.").optional(),
  "template": z.string().nullable().describe("The template used to print or email the invoice.").optional(),
  "includeInInvoiceReminders": z.boolean().nullable().describe("If true, this invoice should be included in daily reminder checks.").optional(),
  "notes": z.string().nullable().describe("Notes related to the invoice.").optional(),
  "paymentDetails": z.string().nullable().describe("Details of how to pay the invoice.").optional()
}