import { z } from "zod"

export const inputParamsSchema = {
  "address_id": z.string(),
  "payment_method_id": z.string()
}