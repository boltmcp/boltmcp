import { z } from "zod"

export const inputParamsSchema = {
  "days": z.number().int().gte(1).optional(),
  "authorization": z.string()
}