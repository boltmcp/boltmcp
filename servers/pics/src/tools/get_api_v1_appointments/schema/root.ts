import { z } from "zod"

export const inputParamsSchema = {
  "text": z.string().describe("Search by Title").optional(),
  "type": z.string().describe("Search by Appointment Type").optional(),
  "class": z.string().describe("Search by Appointment Class").optional(),
  "status": z.string().describe("Search by Appointment Status").optional(),
  "subStatus": z.string().describe("Search by Appointment SubStatus").optional(),
  "workflow": z.string().describe("Search by Appointment Workflow").optional(),
  "modifiedSince": z.string().datetime({ offset: true }).describe("Search for Appointments Modified Since").optional(),
  "createdSince": z.string().datetime({ offset: true }).describe("Search for Appointments Created Since").optional(),
  "sortDirection": z.enum(["Assending","Descending"]).describe("Sort Direction").optional(),
  "pageNumber": z.number().int().describe("Page Number").optional(),
  "pageSize": z.number().int().gte(5).lte(1000).describe("Page Size").optional()
}