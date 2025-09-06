import { z } from "zod"

export const inputParamsSchema = {
  "biz_group_id": z.string().uuid()
}