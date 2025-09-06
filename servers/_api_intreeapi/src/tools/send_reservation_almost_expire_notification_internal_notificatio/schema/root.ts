import { z } from "zod"

export const inputParamsSchema = {
  "hub_id": z.string().uuid(),
  "hub_name": z.string(),
  "recipient_ids": z.array(z.string().uuid()),
  "id": z.string().uuid(),
  "title": z.string()
}