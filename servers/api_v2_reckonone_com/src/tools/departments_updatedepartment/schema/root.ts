import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "departmentId": z.string().describe("The department's id."),
  "name": z.string().min(1).max(50).describe("The department's unique name."),
  "code": z.string().max(50).nullable().describe("The department's unique code.").optional(),
  "status": z.enum(["Active","Inactive"]).describe("The status of a department.").describe("The department's status.").optional(),
  "notes": z.string().max(500).nullable().describe("Notes about the department.").optional(),
  "managers": z.array(z.object({ "id": z.string().describe("A manager's Id.").optional() }).strict().describe("Manager belonging to department.")).nullable().describe("A list of managers assigned to the department.").optional(),
  "employees": z.array(z.object({ "id": z.string().describe("An employee's Id.").optional() }).strict().describe("Employee belonging to department.")).nullable().describe("A list of employees assigned to the department.").optional()
}