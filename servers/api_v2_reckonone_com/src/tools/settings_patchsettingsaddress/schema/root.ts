import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "type": z.string().describe("The type of address. This can either be `legal`, `physical` or the address type id."),
  "line1": z.string().max(80).nullable().describe("First line of address.").optional(),
  "line2": z.string().max(80).nullable().describe("Second line of address.").optional(),
  "line3": z.string().max(80).nullable().describe("Third line of address.").optional(),
  "town": z.string().max(80).nullable().describe("Town of address.").optional(),
  "suburb": z.string().max(80).nullable().describe("Suburb of address.").optional(),
  "state": z.string().max(80).nullable().describe("State of address.").optional(),
  "postcode": z.string().max(30).nullable().describe("Postcode of address.").optional(),
  "country": z.string().max(30).nullable().describe("Country of address.").optional()
}