import { z } from "zod"

export const inputParamsSchema = {
  "hub_id": z.string().uuid(),
  "sort_by": z.enum(["asc(created_at)","desc(created_at)","asc(num_shared)","desc(num_shared)","asc(num_arrivals)","desc(num_arrivals)","asc(num_redeems_from_shares)","desc(num_redeems_from_shares)","asc(rank)","desc(rank)"]).describe("Sort by options for ambassador insights.\n\n- `created_at`: sort by when the ambassador user is created.\n- `num_shared`: sort by the amount of direct shares in the period.\n- `num_arrivals`: sort by the amount of arrivals in the period.\n- `num_redeems_from_shares`: sort by amount of redeems from shares in the period.\n- `rank`: sort by the rank of the ambassador.").optional(),
  "limit": z.number().int().gte(1).lte(100).optional(),
  "token": z.string().optional(),
  "start_date": z.string().datetime({ offset: true }).optional(),
  "end_date": z.string().datetime({ offset: true }).optional(),
  "user_id": z.union([z.string().uuid(), z.null()]).describe("Filter on user ID. To keep rank consistent, this will make the user the first result, the limit will be set to 1, total will be set to 1 and next will be set to null, in case the user does not exist, it will return empty and have the total be 0.").optional()
}