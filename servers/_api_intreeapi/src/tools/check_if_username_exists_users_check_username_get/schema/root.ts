import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().min(3).max(30)
}