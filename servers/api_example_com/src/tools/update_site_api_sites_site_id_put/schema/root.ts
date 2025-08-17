import { z } from "zod"

export const inputParamsSchema = {
  "site_id": z.string(),
  "name": z.union([z.string(), z.null()]).optional(),
  "address": z.union([z.string(), z.null()]).optional(),
  "company_id": z.union([z.string().uuid(), z.null()]).optional(),
  "active": z.union([z.boolean(), z.null()]).optional(),
  "hidden": z.union([z.boolean(), z.null()]).optional()
}