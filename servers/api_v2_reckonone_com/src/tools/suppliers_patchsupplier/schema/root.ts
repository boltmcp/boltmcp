import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "supplierId": z.string().describe("The supplier's id."),
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
  "isTpar": z.boolean().nullable().describe("If the supplier is Tpar.").optional(),
  "bankDetails": z.object({ "name": z.string().nullable().describe("The bank account's name.").optional(), "bankBranchNumber": z.string().nullable().describe("The bank account's branch number.").optional(), "bankAccountNumber": z.string().nullable().describe("The bank account's number.").optional() }).strict().describe("Details of a supplier's bank account to patch.").nullable().describe("The supplier's bank account details.").optional()
}