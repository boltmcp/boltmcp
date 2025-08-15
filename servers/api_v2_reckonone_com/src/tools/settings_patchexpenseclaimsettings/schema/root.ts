import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "approvalEnabled": z.boolean().nullable().describe("Indicates whether expense claim approval is enabled.").optional(),
  "prefix": z.string().nullable().describe("The expense claim prefix.").optional(),
  "transferBillableExpense": z.object({ "taxRate": z.string().nullable().describe("The tax rate.").optional(), "incomeAccount": z.string().nullable().describe("The income account id or name.").optional(), "markupAccount": z.string().nullable().describe("The markup account id or name.").optional(), "accountOption": z.enum(["UseExpenseClaimAccount","UseIncomeAccount"]).describe("Enum representing options for billable expense accounts.").describe("The account option for billable expenses.").optional() }).strict().describe("Represents a patch for transferring billable expenses.").nullable().describe("The transfer billable expense settings.").optional()
}