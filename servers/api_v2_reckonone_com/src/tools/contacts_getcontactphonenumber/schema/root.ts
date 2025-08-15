import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "contactId": z.string().describe("The contact's id."),
  "type": z.string().describe("The phone number's type by name or id.")
}