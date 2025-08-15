import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "name": z.string().min(1).max(50).describe("The payment term's name."),
  "description": z.string().max(100).nullable().describe("The payment term's description.").optional(),
  "status": z.enum(["Inactive","Active"]).describe("The status of a payment term.").nullable().describe("Active/Inactive status of the payment term.").optional(),
  "isDefault": z.boolean().nullable().describe("Whether the payment term is the default for the transaction type.").optional(),
  "useForInvoice": z.boolean().nullable().describe("Whether the payment term is used for invoice type transaction.").optional(),
  "netDueDay": z.number().int().describe("Net Due day of the payment term."),
  "netDueDaySelection": z.enum(["DaysAfterIssue","DayOfMonth","DayOfNextMonth"]).describe("Net due date options.").describe("The due date criteria."),
  "isDueDateWeekend": z.boolean().nullable().describe("Whether the due date falls on weekend. If due date is on a weekend, push due date to the first Monday.").optional(),
  "isIssuedWithinDays": z.boolean().nullable().describe("Whether push invoice issue date to following month if invoice issued within x day(s) of the due date.").optional(),
  "issuedWithinDays": z.number().int().nullable().describe("Invoice issued within x day(s) of the due date").optional()
}