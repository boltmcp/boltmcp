import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string(),
  "page": z.number().int().optional()
}