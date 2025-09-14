import { z } from "zod"

export const inputParamsSchema = {
  "ref": z.union([z.string(), z.null()]).optional(),
  "full_name": z.string(),
  "email": z.string(),
  "password": z.string()
}