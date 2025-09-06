import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "token": z.string(),
  "email_settings": z.array(z.object({ "notification_type": z.enum(["account","invite","partnership","treet"]).describe("Email notification types.\n\n- `account`: account-related emails, such as reset-password\n- `invite`: invite-related emails, such as invite-code\n- `partnership`: partnership-related emails, such as new-partner\n- `treet`: treet-related emails, such as first-treet-redeem"), "enabled": z.boolean() }).describe("Email setting for a business.")).min(1)
}