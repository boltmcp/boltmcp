import { z } from "zod"

export const inputParamsSchema = {
  "currentPassword": z.string().optional(),
  "newPassword": z.string().min(8),
  "accept-language": z.union([z.string(), z.null()]).optional()
}