import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "searchText": z.string().nullable().describe("The text to search for.").optional(),
  "first": z.number().int().nullable().describe("The number of super fund providers to return.").optional()
}