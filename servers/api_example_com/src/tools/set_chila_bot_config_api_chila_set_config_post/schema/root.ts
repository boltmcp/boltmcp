import { z } from "zod"

export const inputParamsSchema = {
  "urutan": z.string(),
  "config": z.union([z.record(z.any()), z.null()]).optional(),
  "admin_notification": z.union([z.string(), z.null()]).optional(),
  "active_notification": z.union([z.string(), z.null()]).optional(),
  "authorization": z.string()
}