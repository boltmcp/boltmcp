import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "name": z.string().min(1).describe("Name of super fund provider."),
  "abn": z.string().min(1).describe("ABN of super fund provider."),
  "usi": z.string().nullable().describe("The Unique Superfund Identifier (USI) of the super fund provider product.").optional()
}