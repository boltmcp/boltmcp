import { z } from "zod"

export const inputParamsSchema = {
  "role": z.string().min(2).max(100),
  "profile_summary": z.string().min(10).max(1000),
  "key_achievements": z.array(z.string()).min(1).max(10),
  "areas_of_expertise": z.array(z.string()).min(1).max(20),
  "format": z.string().regex(new RegExp("^(pdf|typ)$")).optional()
}