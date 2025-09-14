import { z } from "zod"

export const inputParamsSchema = {
  "coupon_id": z.string(),
  "authorization": z.string()
}