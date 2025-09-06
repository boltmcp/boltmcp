import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "biz_partnership_id": z.string().uuid()
}