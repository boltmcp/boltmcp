import { z } from "zod"

export const inputParamsSchema = {
  "role": z.string().min(2).max(100),
  "job_description": z.string().min(10).max(5000),
  "format": z.string().regex(new RegExp("^(pdf|typ)$")).optional(),
  "original_resume": z.union([z.string(), z.null()]).optional(),
  "enable_thinking": z.boolean().optional()
}