import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "customerId": z.string().describe("The customer's id."),
  "name": z.string().min(1).max(100).describe("The contact's display name."),
  "salutation": z.string().max(100).nullable().describe("The salutation to use in communications.").optional(),
  "department": z.string().max(100).nullable().describe("The contact's department.").optional(),
  "position": z.string().max(100).nullable().describe("The contact's position.").optional(),
  "status": z.enum(["Active","Inactive"]).describe("The status of a contact.").nullable().describe("The contact's status.").optional(),
  "notes": z.string().max(1000).nullable().describe("Notes for the contact.").optional(),
  "addresses": z.array(z.object({ "line1": z.string().max(80).nullable().describe("Line 1 of the address."), "line2": z.string().max(80).nullable().describe("Line 2 of the address."), "line3": z.string().max(80).nullable().describe("Line 3 of the address."), "suburb": z.string().max(80).nullable().describe("The suburb."), "town": z.string().max(80).nullable().describe("The town."), "state": z.string().max(80).nullable().describe("The state."), "postcode": z.string().max(30).nullable().describe("The post code."), "country": z.string().max(30).nullable().describe("The country."), "type": z.string().min(1).describe("The id or name of the address type.") }).strict().describe("Details of an address to create or update.")).nullable().describe("List of addresses.").optional(),
  "phoneNumbers": z.array(z.object({ "countryCode": z.string().max(10).nullable().describe("The country code."), "areaCode": z.string().max(10).nullable().describe("The area code."), "number": z.string().max(30).nullable().describe("The number."), "extension": z.string().max(10).nullable().describe("The extension."), "type": z.string().min(1).describe("The id or name of the phone number type.") }).strict().describe("Details of a phone number to create or update.")).nullable().describe("List of phone numbers.").optional(),
  "electronicAddresses": z.array(z.object({ "type": z.string().min(1).describe("The id or name of the electronic address type."), "address": z.string().max(100).nullable().describe("The electronic address.") }).strict().describe("Details of an electronic address to create or update.")).nullable().describe("List of electronic addresses.").optional()
}