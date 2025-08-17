import { z } from "zod"

export const inputParamsSchema = {
  "work_order_id": z.string().uuid()
}