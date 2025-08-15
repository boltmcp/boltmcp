import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "ExternalResourceId": z.string().nullable().describe("The external resource's id.").optional(),
  "ExternalClientId": z.string().describe("The external client application's id.").optional(),
  "ExternalTenancyId": z.string().nullable().describe("The external book/file/tenancy/etc's id.").optional(),
  "name": z.string().min(1).max(100).describe("The organisation's display name."),
  "organisationName": z.string().max(100).nullable().describe("The organisation's name.").optional(),
  "branch": z.string().max(100).nullable().describe("The organisation's branch.").optional(),
  "notes": z.string().max(1000).nullable().describe("Notes for the organisation.").optional(),
  "businessNumber1": z.string().max(20).nullable().describe("The organisation's business number 1.").optional(),
  "businessNumber2": z.string().max(20).nullable().describe("The organisation's business number 2.").optional(),
  "businessNumber": z.string().max(20).nullable().describe("This applies to NZBN number.").optional(),
  "status": z.enum(["Active","Inactive"]).describe("The status of an organisation.").nullable().describe("The status of the organisation. (Active/Inactive)").optional(),
  "addresses": z.array(z.object({ "line1": z.string().max(80).nullable().describe("Line 1 of the address."), "line2": z.string().max(80).nullable().describe("Line 2 of the address."), "line3": z.string().max(80).nullable().describe("Line 3 of the address."), "suburb": z.string().max(80).nullable().describe("The suburb."), "town": z.string().max(80).nullable().describe("The town."), "state": z.string().max(80).nullable().describe("The state."), "postcode": z.string().max(30).nullable().describe("The post code."), "country": z.string().max(30).nullable().describe("The country."), "type": z.string().min(1).describe("The id or name of the address type.") }).strict().describe("Details of an address to create or update.")).nullable().describe("List of addresses.").optional(),
  "phoneNumbers": z.array(z.object({ "countryCode": z.string().max(10).nullable().describe("The country code."), "areaCode": z.string().max(10).nullable().describe("The area code."), "number": z.string().max(30).nullable().describe("The number."), "extension": z.string().max(10).nullable().describe("The extension."), "type": z.string().min(1).describe("The id or name of the phone number type.") }).strict().describe("Details of a phone number to create or update.")).nullable().describe("List of phone numbers.").optional(),
  "electronicAddresses": z.array(z.object({ "type": z.string().min(1).describe("The id or name of the electronic address type."), "address": z.string().max(100).nullable().describe("The electronic address.") }).strict().describe("Details of an electronic address to create or update.")).nullable().describe("List of electronic addresses.").optional(),
  "entityTypes": z.object({ "isCustomer": z.boolean().nullable().describe("Is the entity a customer."), "isSupplier": z.boolean().nullable().describe("Is the entity a suppleir."), "isEmployee": z.boolean().nullable().describe("Is the entity an employee."), "isSuperfund": z.boolean().nullable().describe("Is the entity a superfund.") }).strict().describe("Contact's entity types.").nullable().describe("The organisation's entity types.").optional(),
  "creditLimit": z.number().nullable().describe("The customer's credit limit.").optional(),
  "paymentTerms": z.string().nullable().describe("The customer's payment term id.").optional(),
  "transactionPassword": z.object({ "password": z.string().nullable().describe("Password for customer transaction documents.").optional(), "applyToInvoices": z.boolean().nullable().describe("Apply password to invoice documents.").optional(), "applyToStatements": z.boolean().nullable().describe("Apply password to statement documents.").optional() }).strict().describe("Details of customer transaction password.").nullable().describe("The customer's transaction password details").optional(),
  "customFields": z.array(z.object({ "field": z.string().min(1).describe("The id or name of the custom field."), "value": z.string().nullable().describe("The custom field value.") }).strict().describe("          Represents a custom field value input specific to an organization.  \n          ")).nullable().describe("List of custom fields.").optional(),
  "excludeFromInvoiceReminders": z.boolean().nullable().describe("Indicates that the invoice reminder has been excluded for invoices").optional()
}