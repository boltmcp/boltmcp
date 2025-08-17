import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string(),
  "theme_preference": z.enum(["light","dark","system"])
}