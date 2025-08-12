import { z } from "zod"

export const inputParamsSchema = {
  "orderId": z.string().uuid()
}