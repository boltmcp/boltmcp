import { z } from "zod"

export const inputParamsSchema = {
  "privateHousehold": z.boolean().optional(),
  "lockRecipeEditsFromOtherHouseholds": z.boolean().optional(),
  "firstDayOfWeek": z.number().int().optional(),
  "recipePublic": z.boolean().optional(),
  "recipeShowNutrition": z.boolean().optional(),
  "recipeShowAssets": z.boolean().optional(),
  "recipeLandscapeView": z.boolean().optional(),
  "recipeDisableComments": z.boolean().optional(),
  "recipeDisableAmount": z.boolean().optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}