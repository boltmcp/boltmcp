import { z } from "zod"

export const inputParamsSchema = {
  "tag_ids": z.union([z.string(), z.null()]).describe("Comma-separated tag IDs").optional(),
  "start_time": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Start time filter").optional(),
  "end_time": z.union([z.string().datetime({ offset: true }), z.null()]).describe("End time filter").optional(),
  "quality": z.union([z.enum(["good","bad","uncertain","offline"]).describe("Qualidade do dado do sensor"), z.null()]).describe("Data quality filter").optional(),
  "source": z.union([z.string(), z.null()]).describe("Data source filter").optional(),
  "limit": z.union([z.number().int().gte(1), z.null()]).describe("Number of records to return (auto-adjusted for long periods)").optional(),
  "offset": z.number().int().gte(0).describe("Number of records to skip").optional()
}