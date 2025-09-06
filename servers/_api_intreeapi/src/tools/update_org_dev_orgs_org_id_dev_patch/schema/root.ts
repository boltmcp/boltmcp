import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.string(),
  "stripe_customer_id": z.union([z.string(), z.null()]).optional(),
  "num_ambassadors": z.union([z.number().int(), z.null()]).describe("Ambassadors during this period").optional(),
  "org_tier": z.union([z.object({ "origin_tier": z.union([z.enum(["free","base","pro","custom","dev"]).describe("Tiers of an Org.\n\n- `free`: Fixed tier\n- `base`: Fixed tier\n- `pro` : Fixed tier\n\n- `custom`: Custom tier which will default to pro for unset fields.\n- `dev`: Tier only used for development."), z.null()]).optional() }).describe("DTO."), z.null()]).optional()
}