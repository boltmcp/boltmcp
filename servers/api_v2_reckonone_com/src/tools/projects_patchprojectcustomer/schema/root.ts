import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "projectId": z.string().describe("The project's id."),
  "lineId": z.string().describe("The project customer's id."),
  "customer": z.string().nullable().describe("The id or name of the customer.").optional()
}