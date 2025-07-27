import { z } from "zod"

export const inputParamsSchema = {
  "asc": z.enum(["name","id","status","created_at","updated_at"]).optional(),
  "desc": z.enum(["name","id","status","created_at","updated_at"]).optional()
}