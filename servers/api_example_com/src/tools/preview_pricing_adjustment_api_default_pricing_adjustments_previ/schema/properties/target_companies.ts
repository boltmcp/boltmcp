import { z } from "zod"

export const inputParamsSchema = {
  "company_ids": z.union([z.array(z.string().uuid()), z.null()]).optional(),
  "all_companies": z.boolean().optional(),
  "exclude_company_ids": z.union([z.array(z.string().uuid()), z.null()]).optional(),
  "only_active": z.boolean().optional(),
  "created_after": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "created_before": z.union([z.string().datetime({ offset: true }), z.null()]).optional()
}