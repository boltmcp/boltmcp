import { z } from "zod"

export const inputParamsSchema = {
  "filename": z.any(),
  "thumbnail": z.boolean().optional()
}