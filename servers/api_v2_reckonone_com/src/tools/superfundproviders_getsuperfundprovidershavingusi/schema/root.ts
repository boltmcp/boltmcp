import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book Id."),
  "usi": z.string().describe("The USI of a fund product."),
  "page": z.number().int().describe("The page to retrieve.").optional(),
  "perPage": z.number().int().nullable().describe("The number of super fund providers having a product with the provided USI per page.").optional()
}