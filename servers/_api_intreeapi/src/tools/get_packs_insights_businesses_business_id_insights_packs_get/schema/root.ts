import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "sort_by": z.enum(["asc(title)","desc(title)","asc(created_at)","desc(created_at)","asc(claim_count)","desc(claim_count)","asc(revenue)","desc(revenue)"]).describe("Sort by options for pack insights.\n\n- `title`: sort by the title of the pack.\n- `created_at`: sort by when the pack is created.\n- `claim_count`: sort by the amount of claims.\n- `revenue`: sort by the revenue.").optional(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "start_date": z.string().datetime({ offset: true }).optional(),
  "end_date": z.string().datetime({ offset: true }).optional(),
  "id": z.union([z.string().uuid(), z.null()]).optional()
}