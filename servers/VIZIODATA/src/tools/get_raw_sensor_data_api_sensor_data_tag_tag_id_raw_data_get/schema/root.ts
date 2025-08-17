import { z } from "zod"

export const inputParamsSchema = {
  "tag_id": z.string(),
  "start_time": z.string().datetime({ offset: true }).describe("Start time for data retrieval"),
  "end_time": z.string().datetime({ offset: true }).describe("End time for data retrieval"),
  "limit": z.number().int().gte(1).lte(10000).describe("Maximum number of data points").optional()
}