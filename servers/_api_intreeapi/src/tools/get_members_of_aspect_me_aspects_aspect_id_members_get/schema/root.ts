import { z } from "zod"

export const inputParamsSchema = {
  "aspect_id": z.string().uuid(),
  "embed_member": z.boolean().optional(),
  "limit": z.number().int().gt(0).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "sort_by": z.union([z.string().regex(new RegExp("^(?:asc|desc)\\([\\w\\.]+\\)(?:;(?:asc|desc)\\([\\w\\.]+\\))*$")), z.null()]).optional()
}