import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "embed_member_count": z.boolean().optional(),
  "embed_team_count": z.boolean().optional(),
  "embed_partner_count": z.boolean().optional()
}