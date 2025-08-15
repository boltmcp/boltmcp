import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "termId": z.string().describe("The term's id."),
  "name": z.string().nullable().describe("The payment term's name.").optional(),
  "description": z.string().nullable().describe("The payment term's description.").optional(),
  "status": z.enum(["Inactive","Active"]).describe("The status of a payment term.").nullable().describe("Active/Inactive status of the payment term.").optional(),
  "isDefault": z.boolean().nullable().describe("Whether the payment term is the default for the transaction type.").optional(),
  "useForInvoice": z.boolean().nullable().describe("Whether the payment term is used for invoice type transaction.").optional(),
  "netDueDay": z.number().int().nullable().describe("Net Due day of the payment term.").optional(),
  "netDueDaySelection": z.enum(["DaysAfterIssue","DayOfMonth","DayOfNextMonth"]).describe("Net due date options.").nullable().describe("The due date criteria.").optional(),
  "isDueDateWeekend": z.boolean().nullable().describe("Whether the due date falls on weekend. If due date is on a weekend, push due date to the first Monday.").optional(),
  "isIssuedWithinDays": z.boolean().nullable().describe("Whether push invoice issue date to following month if invoice issued within x day(s) of the due date.").optional(),
  "issuedWithinDays": z.number().int().nullable().describe("Invoice issued within x day(s) of the due date").optional()
}