import { z } from "zod"

export const inputParamsSchema = {
  "token": z.union([z.string(), z.null()]).optional()
}