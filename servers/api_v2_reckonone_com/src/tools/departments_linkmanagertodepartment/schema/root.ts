import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "departmentId": z.string().describe("The department's id."),
  "employeeId": z.string().describe("The manager's id to be linked to the department.")
}