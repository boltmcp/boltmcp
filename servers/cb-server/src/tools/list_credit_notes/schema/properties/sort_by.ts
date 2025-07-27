import { z } from "zod"

export const inputParamsSchema = {
  "asc": z.literal("date").optional(),
  "desc": z.literal("date").optional()
}