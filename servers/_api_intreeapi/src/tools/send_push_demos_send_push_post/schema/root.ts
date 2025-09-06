import { z } from "zod"

export const inputParamsSchema = {
  "title": z.union([z.string(), z.null()]).optional()
}