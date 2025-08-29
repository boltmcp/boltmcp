import { z } from "zod"

export const inputParamsSchema = {
  "public": z.boolean().optional(),
  "showNutrition": z.boolean().optional(),
  "showAssets": z.boolean().optional(),
  "landscapeView": z.boolean().optional(),
  "disableComments": z.boolean().optional(),
  "disableAmount": z.boolean().optional(),
  "locked": z.boolean().optional()
}