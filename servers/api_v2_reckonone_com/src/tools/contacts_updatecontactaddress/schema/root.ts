import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "contactId": z.string().describe("The contact's id."),
  "type": z.string().describe("The address's type by name or id."),
  "line1": z.string().max(80).nullable().describe("Line 1 of the address.").optional(),
  "line2": z.string().max(80).nullable().describe("Line 2 of the address.").optional(),
  "line3": z.string().max(80).nullable().describe("Line 3 of the address.").optional(),
  "suburb": z.string().max(80).nullable().describe("The suburb.").optional(),
  "town": z.string().max(80).nullable().describe("The town.").optional(),
  "state": z.string().max(80).nullable().describe("The state.").optional(),
  "postcode": z.string().max(30).nullable().describe("The post code.").optional(),
  "country": z.string().max(30).nullable().describe("The country.").optional()
}