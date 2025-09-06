import { z } from "zod"

export const inputParamsSchema = {
  "id": z.union([z.string().uuid(), z.null()]),
  "ambassador_id": z.string().uuid(),
  "recipient_ids": z.array(z.string().uuid()),
  "title": z.union([z.string(), z.null()]),
  "ambassador_name": z.string()
}