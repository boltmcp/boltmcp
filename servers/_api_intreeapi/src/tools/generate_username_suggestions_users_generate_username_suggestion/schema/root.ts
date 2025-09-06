import { z } from "zod"

export const inputParamsSchema = {
  "full_name": z.string().min(1).max(255)
}