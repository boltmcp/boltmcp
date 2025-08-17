import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "site_id": z.string().uuid(),
  "active": z.boolean().optional(),
  "hidden": z.boolean().optional()
}