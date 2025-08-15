import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "fund": z.string().min(1).describe("The id or name of the super fund."),
  "fundProduct": z.string().nullable().describe("The id or name of the super fund product.").optional()
}