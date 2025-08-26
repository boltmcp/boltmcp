import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "page": z.number().int().optional()
}