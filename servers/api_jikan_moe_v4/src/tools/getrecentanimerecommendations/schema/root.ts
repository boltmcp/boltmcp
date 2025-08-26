import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().optional()
}