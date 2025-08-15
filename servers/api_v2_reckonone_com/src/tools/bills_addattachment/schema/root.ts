import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "billId": z.string().describe("The bill's id."),
  "fileName": z.string().nullable().describe("The name of the file when passing a single document in the body of the request.").optional()
}