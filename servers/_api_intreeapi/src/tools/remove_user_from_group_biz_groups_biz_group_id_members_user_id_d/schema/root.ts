import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().uuid(),
  "biz_group_id": z.string().uuid()
}