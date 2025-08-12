import { z } from "zod"

export const inputParamsSchema = {
  "line1": z.string(),
  "line2": z.string().optional(),
  "city": z.string(),
  "state": z.string(),
  "postal_code": z.string(),
  "country": z.string()
}