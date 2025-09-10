import { z } from "zod"

export const inputParamsSchema = {
  "line1": z.string().max(60).nullable().optional(),
  "line2": z.string().max(60).nullable().optional(),
  "line3": z.string().max(60).nullable().optional(),
  "line4": z.string().max(60).nullable().optional(),
  "line5": z.string().max(60).nullable().optional(),
  "postcode": z.string().max(8).nullable().optional()
}