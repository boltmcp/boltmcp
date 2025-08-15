import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "superfundId": z.string().describe("The super fund's id."),
  "page": z.number().int().describe("The page to retrieve.").optional(),
  "perPage": z.number().int().nullable().describe("The number of super fund's contact per page.").optional()
}