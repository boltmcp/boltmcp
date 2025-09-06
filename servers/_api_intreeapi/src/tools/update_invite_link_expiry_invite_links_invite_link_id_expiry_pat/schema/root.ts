import { z } from "zod"

export const inputParamsSchema = {
  "invite_link_id": z.string().uuid(),
  "expires_at": z.string().describe("The expiry date of the link, maximum 7 days from InviteLink creation.").optional()
}