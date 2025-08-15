import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "expenseClaimId": z.string().describe("The expense claim's id."),
  "employee": z.string().nullable().describe("The employee who lodged the expense claim.").optional(),
  "claimDate": z.string().datetime({ offset: true }).nullable().describe("The date of the expense claim.").optional(),
  "reference": z.string().nullable().describe("The reference entered by the employee.").optional(),
  "project": z.string().nullable().describe("The project that the expense claim relates to.").optional(),
  "customer": z.string().nullable().describe("The customer that the expense claim relates to.").optional(),
  "status": z.enum(["Draft","Approved","Paid","Submitted","Declined"]).describe("The status of an expense claim.").nullable().describe("The status of the expense claim.").optional(),
  "declineReason": z.string().nullable().describe("The decline reason when the status is set to Declined.\nThis cannot be used with any other status.").optional(),
  "notes": z.string().nullable().describe("The notes entered by the employee.").optional()
}