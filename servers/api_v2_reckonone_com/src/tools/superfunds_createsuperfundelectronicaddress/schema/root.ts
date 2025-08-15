import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "superfundId": z.string().describe("The super fund's id."),
  "type": z.string().min(1).describe("The id or name of the electronic address type."),
  "address": z.string().max(100).nullable().describe("The electronic address.").optional()
}