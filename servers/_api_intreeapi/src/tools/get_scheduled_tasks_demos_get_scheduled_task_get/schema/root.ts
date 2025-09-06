import { z } from "zod"

export const inputParamsSchema = {
  "id": z.union([z.string().uuid(), z.null()]).optional()
}