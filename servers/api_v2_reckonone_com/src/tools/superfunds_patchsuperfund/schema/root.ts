import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "superfundId": z.string().describe("The super fund's id."),
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
  "bankDetails": z.object({ "name": z.string().nullable().describe("The bank account's name.").optional(), "bankBranchNumber": z.string().nullable().describe("The bank account's branch number.").optional(), "bankAccountNumber": z.string().nullable().describe("The bank account's number.").optional() }).strict().describe("Details of a superfund's bank account to patch.").nullable().describe("The superfund's bank account details.").optional(),
  "superFundDetails": z.object({ "superfundProvider": z.object({ "fund": z.string().nullable().describe("The superfund provider id").optional(), "employerNumber": z.string().nullable().describe("APRA type employee number").optional() }).strict().describe("Superfund’s details to patch").nullable().describe("The superfundProvider details").optional(), "smsf": z.object({ "fundName": z.string().nullable().describe("The SelfManagedSuperfund (SMSF) Name").optional(), "electronicServiceAddress": z.string().nullable().describe("The electronic address for service").optional() }).strict().describe("Superfund’s details to patch.").nullable().describe("The SMSF provider details").optional() }).strict().describe("Details of a superfund to patch.").nullable().describe("The superfund's details.").optional()
}