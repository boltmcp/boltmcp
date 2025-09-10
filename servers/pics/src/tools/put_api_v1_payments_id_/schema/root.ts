import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The Payment's ID"),
  "b_id": z.string().min(1).describe("ID associated with the payment details"),
  "paymentItem": z.string().nullable().describe("Payment item details").optional(),
  "systemType": z.string().nullable().describe("System type associated with the payment").optional(),
  "creditDebit": z.string().nullable().describe("Credit or debit status associated with the payment").optional(),
  "description": z.string().min(1).describe("Description of the payment"),
  "reference": z.string().nullable().describe("Reference number associated with the payment").optional(),
  "purchaseOrderNumber": z.string().nullable().describe("Purchase order number associated with the payment").optional(),
  "invoiceNumber": z.string().nullable().describe("Invoice number associated with the payment").optional(),
  "notes": z.string().nullable().describe("Additional notes related to the payment").optional(),
  "status": z.string().nullable().describe("Status of the payment").optional(),
  "createdDate": z.string().datetime({ offset: true }).nullable().describe("Date when the payment was created").optional(),
  "raisedDate": z.string().datetime({ offset: true }).nullable().describe("Date when the payment was raised").optional(),
  "raisedBy": z.string().nullable().describe("Person who raised the payment").optional(),
  "expectedDate": z.string().datetime({ offset: true }).nullable().describe("Date when the payment is expected").optional(),
  "expectedAmount": z.number().nullable().describe("Expected amount for the payment").optional(),
  "authorisedDate": z.string().datetime({ offset: true }).nullable().describe("Date when the payment was authorized").optional(),
  "authorisedBy": z.string().nullable().describe("Person who authorized the payment").optional(),
  "actualDate": z.string().datetime({ offset: true }).nullable().describe("Date when the payment was actually processed").optional(),
  "actualAmount": z.number().nullable().describe("Actual amount for the payment").optional(),
  "actualBy": z.string().nullable().describe("Person associated with the actual processing of the payment").optional(),
  "invoicedDate": z.string().datetime({ offset: true }).nullable().describe("Date when the payment was invoiced").optional(),
  "reconciledDate": z.string().datetime({ offset: true }).nullable().describe("Date when the payment was reconciled").optional()
}