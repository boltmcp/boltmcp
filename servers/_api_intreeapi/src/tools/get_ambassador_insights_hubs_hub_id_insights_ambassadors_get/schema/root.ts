import { z } from "zod"

export const inputParamsSchema = {
  "hub_id": z.string().uuid(),
  "sort_by": z.enum(["asc(created_at)","desc(created_at)","asc(period_redeems)","desc(period_redeems)","asc(num_direct)","desc(num_direct)","asc(num_shared)","desc(num_shared)","asc(num_reshared)","desc(num_reshared)","asc(num_reach)","desc(num_reach)","asc(average_reach)","desc(average_reach)","asc(num_bookings)","desc(num_bookings)","asc(num_arrivals)","desc(num_arrivals)","asc(num_redeems_from_shares)","desc(num_redeems_from_shares)","asc(rank)","desc(rank)"]).describe("Sort by options for ambassador insights.\n\n- `created_at`: sort by when the ambassador user is created.\n- `period_redeems`: sort by the amount of redeems in the period.\n- `num_direct`: sort by the amount of direct accesses in the period.\n- `num_shared`: sort by the amount of direct shares in the period.\n- `num_reshared`: sort by the amount of reshares in the period.\n- `num_reach`: sort by the amount of reach in the period.\n- `average_reach`: sort by the average reach in the period.\n- `num_bookings`: sort by the amount of bookings in the period.\n- `num_arrivals`: sort by the amount of arrivals in the period.\n- `num_redeems_from_shares`: sort by amount of redeems from shares in the period.\n- `rank`: sort by the rank of the ambassador.").optional(),
  "limit": z.number().int().gte(1).lte(100).optional(),
  "token": z.string().optional(),
  "start_date": z.string().datetime({ offset: true }).optional(),
  "end_date": z.string().datetime({ offset: true }).optional(),
  "user_id": z.union([z.string().uuid(), z.null()]).describe("Filter on user ID. To keep rank consistent, this will make the user the first result, the limit will be set to 1, total will be set to 1 and next will be set to null, in case the user does not exist, it will return empty and have the total be 0.").optional(),
  "embed_booking_data": z.boolean().optional(),
  "embed_rank": z.boolean().describe("embed_booking_data should be set to include data from arrivals in the calculation of rank.").optional()
}