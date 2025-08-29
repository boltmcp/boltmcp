import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.string(),
  "groupId": z.string(),
  "name": z.string().min(1),
  "id": z.string(),
  "preferences": z.union([z.object({ "privateHousehold": z.boolean(), "lockRecipeEditsFromOtherHouseholds": z.boolean(), "firstDayOfWeek": z.number().int(), "recipePublic": z.boolean(), "recipeShowNutrition": z.boolean(), "recipeShowAssets": z.boolean(), "recipeLandscapeView": z.boolean(), "recipeDisableComments": z.boolean(), "recipeDisableAmount": z.boolean() }), z.null()]).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}