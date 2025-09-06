import { z } from "zod"

export const inputParamsSchema = {
  "biz_invite_id": z.string().uuid()
}