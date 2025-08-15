import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "addressTypeId": z.string().describe("The address type's id.")
}