import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "departmentId": z.string().describe("The departments's id."),
  "name": z.string().max(50).nullable().describe("The department's unique name.").optional(),
  "code": z.string().max(50).nullable().describe("The department's unique code.").optional(),
  "status": z.enum(["Active","Inactive"]).describe("The status of a department.").nullable().describe("The department's status.").optional(),
  "notes": z.string().max(500).nullable().describe("Notes about the department.").optional()
}