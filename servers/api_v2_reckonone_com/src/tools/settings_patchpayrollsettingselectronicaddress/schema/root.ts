import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "type": z.string().describe("The type of electronic address. This can either be `email` or the email type id."),
  "address": z.string().nullable().describe("The electronic address.").optional()
}