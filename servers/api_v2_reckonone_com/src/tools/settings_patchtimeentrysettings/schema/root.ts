import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "approvalEnabled": z.boolean().nullable().describe("Indicates whether time entry approval is enabled.").optional(),
  "firstDayOfWeek": z.enum(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]).nullable().describe("The start time of a week. ").optional(),
  "transferBillableTimeAs": z.object({ "combineItemAndRate": z.boolean().nullable().describe("Indicates whether to combine the item and the rate when transferring billable time.").optional(), "transferNotes": z.boolean().nullable().describe("Indicates whether to use time sheet entry notes as line item descriptions when transferring billable time separately.").optional(), "transferDescriptions": z.boolean().nullable().describe("Indicates whether to use chargeable item descriptions as line item descriptions when transferring billable time separately.").optional() }).strict().describe("Transfer billable time settings to patch.").nullable().describe("The transfer billable time settings.").optional()
}