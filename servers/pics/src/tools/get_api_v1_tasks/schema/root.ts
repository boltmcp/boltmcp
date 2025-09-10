import { z } from "zod"

export const inputParamsSchema = {
  "text": z.string().describe("Search by Title").optional(),
  "type": z.string().describe("Search by Task Type").optional(),
  "status": z.string().describe("Search by Task Status").optional(),
  "subStatus": z.string().describe("Search by Task SubStatus").optional(),
  "workflow": z.string().describe("Search by Task Workflow").optional(),
  "modifiedSince": z.string().datetime({ offset: true }).describe("Search for Tasks Modified Since").optional(),
  "createdSince": z.string().datetime({ offset: true }).describe("Search for Tasks Created Since").optional(),
  "sortDirection": z.enum(["Assending","Descending"]).describe("Sort Direction").optional(),
  "pageNumber": z.number().int().describe("Page Number").optional(),
  "pageSize": z.number().int().gte(5).lte(1000).describe("Page Size").optional()
}