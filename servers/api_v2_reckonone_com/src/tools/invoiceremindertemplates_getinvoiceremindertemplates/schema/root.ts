import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The unique identifier of the book."),
  "page": z.number().int().describe("The page number to retrieve. Defaults to 1.").optional(),
  "perPage": z.number().int().nullable().describe("The number of items per page. Defaults to 0, which uses the default page size.").optional()
}