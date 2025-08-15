import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "type": z.string().describe("The type of phone number. This can either be `phone` or the phone number type id."),
  "areaCode": z.string().max(10).nullable().describe("The area code.").optional(),
  "number": z.string().max(30).nullable().describe("The number.").optional()
}