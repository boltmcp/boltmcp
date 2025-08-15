import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "name": z.string().min(1).max(100).describe("The employee's display name."),
  "firstName": z.string().min(1).max(100).describe("The employee's first name."),
  "surname": z.string().min(1).max(100).describe("The employee's last name."),
  "notes": z.string().max(1000).nullable().describe("Additional notes about the employee.").optional(),
  "businessNumber1": z.string().max(30).nullable().describe("The employee's business number 1.").optional(),
  "businessNumber2": z.string().max(30).nullable().describe("The employee's business number 2.").optional(),
  "status": z.enum(["Active","Inactive"]).describe("The status of a contact.").nullable().describe("The status of the employee.").optional(),
  "addresses": z.array(z.object({ "line1": z.string().max(80).nullable().describe("Line 1 of the address."), "line2": z.string().max(80).nullable().describe("Line 2 of the address."), "line3": z.string().max(80).nullable().describe("Line 3 of the address."), "suburb": z.string().max(80).nullable().describe("The suburb."), "town": z.string().max(80).nullable().describe("The town."), "state": z.string().max(80).nullable().describe("The state."), "postcode": z.string().max(30).nullable().describe("The post code."), "country": z.string().max(30).nullable().describe("The country."), "type": z.string().min(1).describe("The id or name of the address type.") }).strict().describe("Details of an address to create or update.")).nullable().describe("List of addresses.").optional(),
  "phoneNumbers": z.array(z.object({ "countryCode": z.string().max(10).nullable().describe("The country code."), "areaCode": z.string().max(10).nullable().describe("The area code."), "number": z.string().max(30).nullable().describe("The number."), "extension": z.string().max(10).nullable().describe("The extension."), "type": z.string().min(1).describe("The id or name of the phone number type.") }).strict().describe("Details of a phone number to create or update.")).nullable().describe("List of phone numbers.").optional(),
  "electronicAddresses": z.array(z.object({ "type": z.string().min(1).describe("The id or name of the electronic address type."), "address": z.string().max(100).nullable().describe("The electronic address.") }).strict().describe("Details of an electronic address to create or update.")).nullable().describe("List of electronic addresses.").optional()
}