import { z } from "zod"

export const inputParamsSchema = {
  "asc": z.literal("occurred_at").optional(),
  "desc": z.literal("occurred_at").optional()
}