import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string(),
  "delay_in_minutes": z.number().int().optional()
}