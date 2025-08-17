import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "address": z.string(),
  "company_id": z.string().uuid(),
  "active": z.boolean().optional(),
  "hidden": z.boolean().optional()
}