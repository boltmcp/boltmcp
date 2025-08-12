import { z } from "zod"

export const inputParamsSchema = {
  "product_id": z.string().uuid(),
  "quantity": z.number().int().gte(1)
}