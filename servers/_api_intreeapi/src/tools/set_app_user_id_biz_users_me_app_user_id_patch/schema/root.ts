import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().min(1).max(30),
  "phone": z.string().max(255)
}