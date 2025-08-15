import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "customerId": z.string().describe("The customer's id."),
  "type": z.string().describe("The custom field name or id."),
  "value": z.string().nullable().describe("Gets or sets the value to assign to the custom field.").optional()
}