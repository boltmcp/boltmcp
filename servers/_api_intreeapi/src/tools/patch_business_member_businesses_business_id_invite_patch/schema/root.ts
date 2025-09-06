import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "invite_status": z.enum(["invited","accepted","rejected"]).describe("Invite status for BusinessMember.\n\n`invited`: invited to join the business\n\n`accepted`: accepted the invitation to join the business\n\n`rejected`: rejected the invitation to join the business")
}