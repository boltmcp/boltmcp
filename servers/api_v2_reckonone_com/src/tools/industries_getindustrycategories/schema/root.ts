import { z } from "zod"

export const inputParamsSchema = {
  "industryId": z.string().describe("The industry's id."),
  "page": z.number().int().describe("The page to retrieve.").optional(),
  "perPage": z.number().int().nullable().describe("The number of industry categories per page.").optional()
}