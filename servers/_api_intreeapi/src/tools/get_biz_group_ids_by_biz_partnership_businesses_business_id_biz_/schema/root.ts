import { z } from "zod"

export const inputParamsSchema = {
  "biz_partnership_id": z.string().uuid(),
  "business_id": z.string().uuid()
}