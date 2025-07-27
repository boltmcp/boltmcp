import { z } from "zod"

export const inputParamsSchema = {
  "asc": z.enum(["created_at","updated_at"]).optional(),
  "desc": z.enum(["created_at","updated_at"]).optional()
}