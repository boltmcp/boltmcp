import { z } from "zod"

export const inputParamsSchema = {
  "asc": z.literal("created_at").optional(),
  "desc": z.literal("created_at").optional()
}