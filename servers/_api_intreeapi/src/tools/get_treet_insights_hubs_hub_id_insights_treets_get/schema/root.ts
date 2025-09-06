import { z } from "zod"

export const inputParamsSchema = {
  "hub_id": z.string().uuid(),
  "sort_by": z.enum(["asc(title)","desc(title)","asc(created_at)","desc(created_at)","asc(period_redeems)","desc(period_redeems)","asc(period_shares)","desc(period_shares)","asc(num_direct)","desc(num_direct)","asc(num_shared)","desc(num_shared)","asc(num_reshared)","desc(num_reshared)","asc(num_reach)","desc(num_reach)"]).describe("Sort by options for treet insights.\n\n- `title`: sort by the title of the treet.\n- `created_at`: sort by when the treet is created.\n- `period_redeems`: sort by the amount of redeems in the period.\n- `period_shares`: sort by the amount of shares in the period.\n- `num_direct`: sort by the amount of direct accesses in the period.\n- `num_shared`: sort by the amount of direct shares in the period.\n- `num_reshared`: sort by the amount of reshares in the period.\n- `num_reach`: sort by the amount of reach in the period.").optional(),
  "limit": z.number().int().gte(1).lte(100).optional(),
  "token": z.string().optional(),
  "start_date": z.string().datetime({ offset: true }).optional(),
  "end_date": z.string().datetime({ offset: true }).optional(),
  "hub_access_state": z.union([z.enum(["owner","direct","partner","world_wide"]).describe("Describes how the Hub has access to the Treet.\n\nThe values are ordered by priority.\n\nE.g. if the Hub has direct access and suddenly get owner access,\nthen it will be changed to owner access.\nBut if it has direct access and suddenly gets partner access,\nthen it will not change.\n\n- `owner`: The Hub is the owner of the Treet.\n- `direct`: An admin or similar has given the Hub direct access to the Treet.\n- `partner`: A partner of the Hub has given the Hub access to the Treet.\n- `world_wide`: The Treet was picked from a world wide pool.\n\nCurrently only owner and partner access is used."), z.null()]).optional(),
  "id": z.union([z.string().uuid(), z.null()]).optional()
}