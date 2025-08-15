import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "projectId": z.string().describe("The project's id."),
  "name": z.string().max(300).nullable().describe("Name of project.").optional(),
  "status": z.enum(["Active","Inactive","Cancelled","Completed"]).describe("The status of a project.").nullable().describe("Status of project.").optional(),
  "amountTaxStatus": z.enum(["NonTaxed","Inclusive","Exclusive"]).describe("The tax status of an item's amount.").nullable().describe("The amount tax status of the amounts in the project.").optional(),
  "parentProject": z.string().nullable().describe("The parent project.").optional(),
  "startDate": z.string().datetime({ offset: true }).nullable().describe("The date the project starts.").optional(),
  "endDate": z.string().datetime({ offset: true }).nullable().describe("The date the project ends.").optional(),
  "description": z.string().nullable().describe("A description of the project.").optional(),
  "billingMethod": z.enum(["ProjectItemRate","SubProjectBilling"]).describe("Enum representing the billing methods for a project.").nullable().describe("The billing method for the project.").optional()
}