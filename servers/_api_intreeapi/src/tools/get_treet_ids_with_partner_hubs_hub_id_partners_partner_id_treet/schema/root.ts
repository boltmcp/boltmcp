import { z } from "zod"

export const inputParamsSchema = {
  "hub_id": z.string().uuid(),
  "partner_id": z.string().uuid()
}