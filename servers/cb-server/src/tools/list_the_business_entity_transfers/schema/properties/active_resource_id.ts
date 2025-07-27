import { z } from "zod"

export const inputParamsSchema = {
  "is": z.string().min(1).optional()
}