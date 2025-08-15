import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "superfundId": z.string().describe("The super fund's id."),
  "contactId": z.string().describe("The contact's id to be linked to the super fund.")
}