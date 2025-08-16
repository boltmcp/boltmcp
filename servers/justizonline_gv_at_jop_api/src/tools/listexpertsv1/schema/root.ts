import { z } from "zod"

export const inputParamsSchema = {
  "from": z.string().date().describe("Filter to include changes from date").optional(),
  "until": z.string().date().describe("Filter to include changes until date").optional(),
  "type": z.enum(["SV","DO"]).describe("Filter to include specific types of experts").optional(),
  "pageNumber": z.number().int().describe("Page number").optional(),
  "pageSize": z.number().int().describe("Page size").optional()
}