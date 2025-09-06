import { z } from "zod"

export const inputParamsSchema = {
  "push_token": z.union([z.string(), z.null()]).optional(),
  "voip_token": z.union([z.string(), z.null()]).optional()
}