import { z } from "zod"

export const inputParamsSchema = {
  "service": z.union([z.string(), z.null()]).describe("Filter by service").optional(),
  "level": z.union([z.string(), z.null()]).describe("Filter by log level").optional(),
  "start_date": z.union([z.string(), z.null()]).describe("Start date (YYYY-MM-DD)").optional(),
  "end_date": z.union([z.string(), z.null()]).describe("End date (YYYY-MM-DD)").optional()
}