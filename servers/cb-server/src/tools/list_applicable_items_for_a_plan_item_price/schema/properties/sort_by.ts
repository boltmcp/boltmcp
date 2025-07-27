import { z } from "zod"

export const inputParamsSchema = {
  "asc": z.enum(["name","id","updated_at"]).optional(),
  "desc": z.enum(["name","id","updated_at"]).optional()
}