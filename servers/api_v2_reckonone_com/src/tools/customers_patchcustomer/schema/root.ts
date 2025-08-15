import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "customerId": z.string().describe("The customer's id."),
  "ExternalResourceId": z.string().nullable().describe("The external resource's id.").optional(),
  "ExternalClientId": z.string().describe("The external client application's id.").optional(),
  "ExternalTenancyId": z.string().nullable().describe("The external book/file/tenancy/etc's id.").optional(),
  "name": z.string().max(100).nullable().describe("The organisation's display name.").optional(),
  "organisationName": z.string().max(100).nullable().describe("The organisation's name.").optional(),
  "branch": z.string().max(100).nullable().describe("The organisation's branch.").optional(),
  "notes": z.string().max(1000).nullable().describe("Notes for the organisation.").optional(),
  "businessNumber1": z.string().max(20).nullable().describe("The organisation's business number 1.").optional(),
  "businessNumber2": z.string().max(20).nullable().describe("The organisation's business number 2.").optional(),
  "businessNumber": z.string().max(20).nullable().describe("This applies to NZBN number.").optional(),
  "status": z.string().nullable().describe("The status of the organisation. (Active/Inactive)").optional(),
  "entityTypes": z.object({ "isCustomer": z.boolean().nullable().describe("Is the entity a customer.").optional(), "isSupplier": z.boolean().nullable().describe("Is the entity a supplier.").optional(), "isEmployee": z.boolean().nullable().describe("Is the entity an employee.").optional(), "isSuperfund": z.boolean().nullable().describe("Is the entity a superfund.").optional() }).strict().describe("Contact's entity types.").nullable().describe("If the entity has other entity types.").optional(),
  "creditLimit": z.number().nullable().describe("The customer's credit limit.").optional(),
  "paymentTerms": z.string().nullable().describe("The customer's peyment term id.").optional(),
  "transactionPassword": z.object({ "password": z.string().nullable().describe("Password for customer transaction documents.").optional(), "applyToInvoices": z.boolean().nullable().describe("Apply password to invoice documents.").optional(), "applyToStatements": z.boolean().nullable().describe("Apply password to statement documents.").optional() }).strict().describe("Details of customer transaction password.").nullable().describe("The customer's transaction password details").optional(),
  "excludeFromInvoiceReminders": z.boolean().nullable().describe("Indicates that the invoice reminder has been excluded for invoices").optional()
}