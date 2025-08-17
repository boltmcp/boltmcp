import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string(),
  "email": z.union([z.string().email(), z.null()]).optional(),
  "full_name": z.union([z.string(), z.null()]).optional(),
  "password": z.union([z.string(), z.null()]).optional(),
  "is_active": z.union([z.boolean(), z.null()]).optional(),
  "is_superuser": z.union([z.boolean(), z.null()]).optional(),
  "theme_preference": z.union([z.enum(["light","dark","system"]), z.null()]).optional()
}