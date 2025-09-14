import { z } from "zod"

export const inputParamsSchema = {
  "urutan": z.string(),
  "auto_renewal_status": z.boolean(),
  "authorization": z.string()
}