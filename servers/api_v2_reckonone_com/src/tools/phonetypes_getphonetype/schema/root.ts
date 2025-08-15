import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "phoneTypeId": z.string().describe("The phone type's id.")
}