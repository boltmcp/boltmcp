import { z } from "zod"

export const inputParamsSchema = {
  "tag_id": z.string(),
  "start_time": z.string().datetime({ offset: true }).describe("Start time for data aggregation"),
  "end_time": z.string().datetime({ offset: true }).describe("End time for data aggregation"),
  "aggregations": z.string().describe("Comma-separated aggregation types").optional(),
  "limit": z.union([z.number().int().gte(1), z.null()]).describe("Maximum number of points per aggregation (auto-adjusted for long periods)").optional()
}