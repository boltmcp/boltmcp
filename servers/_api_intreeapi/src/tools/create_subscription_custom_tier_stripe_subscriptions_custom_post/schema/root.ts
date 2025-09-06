import { z } from "zod"

export const inputParamsSchema = {
  "token": z.string().describe("Custom tier token received in email."),
  "email": z.string().describe("Customer's email address. Stripe returns a 4xx error if above 512 characters which we propagate to the user. If email is not given, then it will be required during checkout."),
  "name": z.string().describe("The customer's full name or business name."),
  "phone": z.union([z.string().describe("The customer's phone number."), z.null()]).optional(),
  "address": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `address` to the tool, first call the tool `expandSchema` with \"/properties/address\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>DTO for a Stripe Address.\n\nAn address is required to compute automatic tax for Stripe.\nThe amount of required fields depends on the country.</property-description>")
}