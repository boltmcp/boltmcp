import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "embed_pack_subscription": z.boolean().describe("Whether to embed the pack subscription details. If true and the embedded subscription is null, it means no current subscription.").optional()
}