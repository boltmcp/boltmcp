import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().uuid(),
  "event_type": z.enum(["notification","biz_treet_access_revoked","biz_treet_access_regranted"])
}