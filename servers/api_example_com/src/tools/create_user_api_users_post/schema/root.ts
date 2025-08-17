import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().email(),
  "full_name": z.string(),
  "is_active": z.boolean().optional(),
  "is_superuser": z.boolean().optional(),
  "theme_preference": z.enum(["light","dark","system"]).optional(),
  "password": z.string()
}