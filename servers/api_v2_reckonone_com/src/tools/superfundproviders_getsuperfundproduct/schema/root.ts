import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "productId": z.string().describe("The super fund product's id.")
}