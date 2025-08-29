import { z } from "zod"

export const inputParamsSchema = {
  "name": z.union([z.string(), z.null()]).optional(),
  "extras": z.union([z.record(z.any()), z.null()]).optional(),
  "createdAt": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "update_at": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}