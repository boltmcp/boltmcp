import { z } from "zod"

export const inputParamsSchema = {
  "module_key": z.string(),
  "active": z.union([z.boolean(), z.null()]).optional(),
  "hidden": z.union([z.boolean(), z.null()]).optional(),
  "marked_for_deletion": z.union([z.boolean(), z.null()]).optional(),
  "name": z.union([z.string().max(100), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "category": z.union([z.string().max(50), z.null()]).optional(),
  "version": z.union([z.string().max(20), z.null()]).optional(),
  "is_available": z.union([z.boolean(), z.null()]).optional(),
  "requires_license": z.union([z.boolean(), z.null()]).optional(),
  "depends_on_modules": z.union([z.array(z.string()), z.null()]).optional(),
  "icon": z.union([z.string().max(50), z.null()]).optional(),
  "color": z.union([z.string().max(7), z.null()]).optional(),
  "sort_order": z.union([z.number().int(), z.null()]).optional()
}