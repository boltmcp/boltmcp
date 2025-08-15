import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "superfundId": z.string().describe("The super fund's id."),
  "type": z.string().describe("The electronic address's type by name or id."),
  "address": z.string().nullable().describe("The electronic address.").optional()
}