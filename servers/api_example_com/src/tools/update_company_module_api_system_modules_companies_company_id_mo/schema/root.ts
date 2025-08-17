import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.string().uuid(),
  "module_key": z.string(),
  "active": z.union([z.boolean(), z.null()]).optional(),
  "hidden": z.union([z.boolean(), z.null()]).optional(),
  "marked_for_deletion": z.union([z.boolean(), z.null()]).optional(),
  "enabled": z.union([z.boolean(), z.null()]).optional(),
  "settings": z.union([z.record(z.any()), z.null()]).optional(),
  "license_expires_at": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "max_users": z.union([z.number().int(), z.null()]).optional(),
  "max_records": z.union([z.number().int(), z.null()]).optional()
}