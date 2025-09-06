import { z } from "zod"

export const inputParamsSchema = {
  "biz_banned_user_id": z.string().uuid()
}