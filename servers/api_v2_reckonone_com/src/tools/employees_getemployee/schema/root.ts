import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "employeeId": z.string().describe("The employee's id.")
}