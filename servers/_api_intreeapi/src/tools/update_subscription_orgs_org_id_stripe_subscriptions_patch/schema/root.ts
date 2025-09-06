import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.string(),
  "update_to_latest_payment_method": z.boolean().describe("Update the default Stripe Payment Method of the subscription to the latest one added. If none exists, then an error is raised.").optional(),
  "new_tier": z.union([z.enum(["base","pro"]), z.null()]).describe("Change the Org's tier. Updating to the same tier does nothing.").optional()
}