import { z } from "zod"

export const inputParamsSchema = {
  "learnerIdent": z.string().min(1).describe("Learner identifier associated with the payment"),
  "organisationCode": z.string().nullable().describe("Organisation code associated with the payment").optional(),
  "paymentItem": z.string().nullable().describe("Payment item details").optional(),
  "systemType": z.string().nullable().describe("System type associated with the payment").optional(),
  "creditDebit": z.string().nullable().describe("Credit or debit status associated with the payment").optional(),
  "description": z.string().min(1).describe("Description of the payment"),
  "reference": z.string().nullable().describe("Reference number associated with the payment").optional(),
  "purchaseOrderNumber": z.string().nullable().describe("Purchase order number associated with the payment").optional(),
  "invoiceNumber": z.string().nullable().describe("Invoice number associated with the payment").optional(),
  "notes": z.string().nullable().describe("Additional notes related to the payment").optional(),
  "status": z.string().nullable().describe("Status of the payment").optional(),
  "createdDate": z.string().datetime({ offset: true }).nullable().describe("Date when the payment is created").optional(),
  "raisedDate": z.string().datetime({ offset: true }).nullable().describe("Date when the payment is raised").optional(),
  "raisedBy": z.string().nullable().describe("Person who raised the payment").optional(),
  "expectedDate": z.string().datetime({ offset: true }).nullable().describe("Date when the payment is expected").optional(),
  "expectedAmount": z.number().nullable().describe("Expected amount for the payment").optional(),
  "authorisedDate": z.string().datetime({ offset: true }).nullable().describe("Date when the payment is authorized").optional(),
  "authorisedBy": z.string().nullable().describe("Person who authorized the payment").optional(),
  "actualDate": z.string().datetime({ offset: true }).nullable().describe("Date when the payment is actually processed").optional(),
  "actualAmount": z.number().nullable().describe("Actual amount for the payment").optional(),
  "actualBy": z.string().nullable().describe("Person associated with the actual processing of the payment").optional(),
  "invoicedDate": z.string().datetime({ offset: true }).nullable().describe("Date when the payment is invoiced").optional(),
  "reconciledDate": z.string().datetime({ offset: true }).nullable().describe("Date when the payment is reconciled").optional()
}