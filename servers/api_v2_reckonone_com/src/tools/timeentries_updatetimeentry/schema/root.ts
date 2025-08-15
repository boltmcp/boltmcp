import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "timeEntryId": z.string().describe("The time entry's id."),
  "employee": z.string().min(1).describe("The id or name of the employee that spent the time."),
  "timeEntryDate": z.string().datetime({ offset: true }).min(1).describe("Date of the time entry."),
  "project": z.string().nullable().describe("The id or full name of the project on which the time was spent on.\nNote that the full name includes the name(s) of any parent project(s) separated by colons.").optional(),
  "customer": z.string().nullable().describe("The id or name of the customer for whom the time was spent on.").optional(),
  "classification": z.string().nullable().describe("The id or name of the classification.").optional(),
  "billable": z.boolean().nullable().describe("Whether the time can be billed to a customer.").optional(),
  "item": z.string().nullable().describe("The id or full name of the item that the time entry relates to.\nNote that the full name includes the name(s) of any parent item(s) separated by colons.").optional(),
  "payrollItem": z.string().nullable().describe("The id or full name of the payroll pay item that the time entry relates to.").optional(),
  "time": z.object({ "startTime": z.string().duration().nullable().describe("The start time. Required if duration is not specified.").optional(), "endTime": z.string().duration().nullable().describe("The end time. Required if duration is not specified.").optional(), "duration": z.number().int().nullable().describe("The duration in minutes. Used if specified, otherwise calculated from startTime and endTime.").optional() }).strict().describe("Time details for a time entry being created or updated.").describe("Details of the time spent."),
  "notes": z.string().nullable().describe("Notes related to the time entry.").optional(),
  "declineReason": z.string().nullable().describe("Reason why time entry approval was declined.\nNote that this cannot be set via POST.").optional()
}