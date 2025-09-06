import { z } from "zod"

export const inputParamsSchema = {
  "hub_id": z.array(z.string().uuid()),
  "embed_total_treets": z.boolean().describe("Embeds the amount of treets owned by the hub and the amount of treets shared with the them.").optional(),
  "redeem_limit_hit": z.union([z.boolean(), z.null()]).describe("If true, only considers treets that have hit total redeem limit. If false, only considers treets that have not hit total redeem limit. If not given, all relevant treets are considered.").optional(),
  "start_date": z.string().datetime({ offset: true }).describe("Start date for the period to get data for.").optional(),
  "end_date": z.string().datetime({ offset: true }).describe("End date for the period to get data for.").optional(),
  "embed_claim_count": z.boolean().describe("Embeds the amount of claims made in the hub.").optional()
}