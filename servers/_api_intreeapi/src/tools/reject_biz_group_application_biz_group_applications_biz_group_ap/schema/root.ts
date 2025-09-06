import { z } from "zod"

export const inputParamsSchema = {
  "biz_group_application_id": z.string().uuid()
}