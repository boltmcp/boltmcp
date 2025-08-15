import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "superfundId": z.string().describe("The super fund's id."),
  "countryCode": z.string().max(10).nullable().describe("The country code.").optional(),
  "areaCode": z.string().max(10).nullable().describe("The area code.").optional(),
  "number": z.string().max(30).nullable().describe("The number.").optional(),
  "extension": z.string().max(10).nullable().describe("The extension.").optional(),
  "type": z.string().min(1).describe("The id or name of the phone number type.")
}