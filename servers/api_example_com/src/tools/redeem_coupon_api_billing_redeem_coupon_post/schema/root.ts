import { z } from "zod"

export const inputParamsSchema = {
  "coupon_code": z.string(),
  "authorization": z.string()
}