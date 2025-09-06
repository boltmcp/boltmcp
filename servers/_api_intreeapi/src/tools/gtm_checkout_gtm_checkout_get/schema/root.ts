import { z } from "zod"

export const inputParamsSchema = {
  "hub_id": z.string().uuid().describe("The ID of the hub where the checkout is being made. The treet code being applied should be owned by this hub."),
  "coupon": z.string().describe("The coupon code being applied to the checkout. This should be the code of the redeemed Treet."),
  "value": z.number().describe("The final price at the end of checkout."),
  "currency": z.string().describe("The currency of the checkout. This should be a valid ISO 4217 currency code.")
}