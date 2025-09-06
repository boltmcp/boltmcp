import { z } from "zod"

export const inputParamsSchema = {
  "redeem_id": z.string().uuid()
}