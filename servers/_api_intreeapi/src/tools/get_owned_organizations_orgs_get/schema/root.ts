import { z } from "zod"

export const inputParamsSchema = {
  "sort_by": z.enum(["asc(name)","desc(name)","asc(created_at)","desc(created_at)"]).describe("Sort by Orgs.\n\n- `name`: sort by the name of the organization.\n- `created_at`: sort by organization was made.\n\nNote that, desc(created_at) is used as tiebreaker.").optional(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "id": z.union([z.string().uuid(), z.null()]).optional(),
  "embed_businesses": z.boolean().optional(),
  "embed_ambassador_data": z.boolean().optional(),
  "embed_hub_data": z.boolean().optional()
}