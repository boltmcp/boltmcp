import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "projectId": z.string().describe("The project's id."),
  "name": z.string().min(1).max(300).describe("Name of project."),
  "status": z.enum(["Active","Inactive","Cancelled","Completed"]).describe("The status of a project.").nullable().describe("Status of project.").optional(),
  "amountTaxStatus": z.enum(["NonTaxed","Inclusive","Exclusive"]).describe("The tax status of an item's amount.").nullable().describe("The amount tax status of the amounts in the project.\nIf this field is omitted, the value from the book's tax settings will be used.").optional(),
  "parentProject": z.string().nullable().describe("The parent project.").optional(),
  "startDate": z.string().datetime({ offset: true }).nullable().describe("The date the project starts.").optional(),
  "endDate": z.string().datetime({ offset: true }).nullable().describe("The date the project ends.").optional(),
  "description": z.string().nullable().describe("A description of the project.").optional(),
  "billingMethod": z.enum(["ProjectItemRate","SubProjectBilling"]).describe("Enum representing the billing methods for a project.").describe("The billing method for the project.").optional(),
  "items": z.array(z.object({ "item": z.string().min(1).describe("The id or name of the item."), "projectRate": z.number().nullable().describe("Rate at which item is charged for this project.") }).strict().describe("Details of a project item to create or update.")).nullable().describe("Items used in the project.").optional(),
  "customers": z.array(z.object({ "weighting": z.number().nullable().describe("Weighting assigned to contact."), "customer": z.string().min(1).describe("The id or name of the customer.") }).strict().describe("Details of a project customer to create or update.")).nullable().describe("Customers linked to the project.").optional(),
  "suppliers": z.array(z.object({ "weighting": z.number().nullable().describe("Weighting assigned to contact."), "supplier": z.string().min(1).describe("The id or name of the supplier.") }).strict().describe("Details of a project supplier to create or update.")).nullable().describe("Suppliers linked to the project.").optional()
}