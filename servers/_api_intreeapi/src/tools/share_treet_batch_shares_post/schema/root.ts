import { z } from "zod"

export const inputParamsSchema = {
  "treet_ids": z.array(z.string().uuid()).min(1).max(100),
  "user_ids": z.array(z.string().uuid()).min(1).max(100)
}