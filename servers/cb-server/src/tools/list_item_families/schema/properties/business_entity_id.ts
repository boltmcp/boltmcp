import { z } from "zod"

export const inputParamsSchema = {
  "is_present": z.enum(["true","false"]).optional(),
  "is": z.string().min(1).optional()
}