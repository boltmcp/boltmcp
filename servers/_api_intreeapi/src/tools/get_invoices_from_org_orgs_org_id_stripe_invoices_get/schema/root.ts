import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.string(),
  "status": z.union([z.enum(["draft","open","paid","uncollectible","void"]).describe("Status of an invoice.\n\n- `draft`: The invoice isn't ready to use.\n- `open`: The invoice is finalized and awaiting payment. If payment fails status\nwill stay `open`.\n- `paid`: Stripe updates invoice from `open` to `paid` if payment succeeds.\n- `void`: This invoice is canceled.\n- `uncollectible`: The customer is unlikely to pay the invoice. Normally, you\ntreat it as bad debt in your accounting process.,"), z.null()]).optional(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional()
}