import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "supplierId": z.string().describe("The supplier's id."),
  "page": z.number().int().describe("The page to retrieve.").optional(),
  "perPage": z.number().int().nullable().describe("The number of supplier's contact per page.").optional()
}