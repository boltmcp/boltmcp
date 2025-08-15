import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "employeeId": z.string().describe("The employee's id."),
  "name": z.string().max(100).nullable().describe("The employee's display name.").optional(),
  "firstName": z.string().max(100).nullable().describe("The employee's first name.").optional(),
  "surname": z.string().max(100).nullable().describe("The employee's last name.").optional(),
  "notes": z.string().max(1000).nullable().describe("Additional notes about the employee.").optional(),
  "businessNumber1": z.string().max(30).nullable().describe("The employee's business number 1.").optional(),
  "businessNumber2": z.string().max(30).nullable().describe("The employee's business number 2.").optional(),
  "status": z.enum(["Active","Inactive"]).describe("The status of a contact.").nullable().describe("The status of the employee.").optional()
}