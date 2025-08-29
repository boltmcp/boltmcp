import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.string(),
  "quantity": z.number().optional(),
  "unit": z.union([z.object({ "id": z.string(), "name": z.string(), "pluralName": z.union([z.string(), z.null()]).optional(), "description": z.string(), "extras": z.union([z.record(z.any()), z.null()]), "fraction": z.boolean(), "abbreviation": z.string(), "pluralAbbreviation": z.union([z.string(), z.null()]), "useAbbreviation": z.boolean(), "aliases": z.array(z.object({ "name": z.string() })), "createdAt": z.union([z.string().datetime({ offset: true }), z.null()]).optional(), "update_at": z.union([z.string().datetime({ offset: true }), z.null()]).optional() }), z.object({ "id": z.union([z.string(), z.null()]).optional(), "name": z.string(), "pluralName": z.union([z.string(), z.null()]).optional(), "description": z.string(), "extras": z.union([z.record(z.any()), z.null()]), "fraction": z.boolean(), "abbreviation": z.string(), "pluralAbbreviation": z.union([z.string(), z.null()]), "useAbbreviation": z.boolean(), "aliases": z.array(z.object({ "name": z.string() })) }), z.null()]).optional(),
  "food": z.union([z.object({ "id": z.string(), "name": z.string(), "pluralName": z.union([z.string(), z.null()]).optional(), "description": z.string(), "extras": z.union([z.record(z.any()), z.null()]), "labelId": z.union([z.string(), z.null()]).optional(), "aliases": z.array(z.object({ "name": z.string() })), "householdsWithIngredientFood": z.array(z.string()), "label": z.union([z.object({ "name": z.string(), "color": z.string(), "groupId": z.string(), "id": z.string() }), z.null()]).optional(), "createdAt": z.union([z.string().datetime({ offset: true }), z.null()]).optional(), "update_at": z.union([z.string().datetime({ offset: true }), z.null()]).optional() }), z.object({ "id": z.union([z.string(), z.null()]).optional(), "name": z.string(), "pluralName": z.union([z.string(), z.null()]).optional(), "description": z.string(), "extras": z.union([z.record(z.any()), z.null()]), "labelId": z.union([z.string(), z.null()]).optional(), "aliases": z.array(z.object({ "name": z.string() })), "householdsWithIngredientFood": z.array(z.string()) }), z.null()]).optional(),
  "note": z.union([z.string(), z.null()]).optional(),
  "isFood": z.boolean().optional(),
  "disableAmount": z.union([z.boolean(), z.null()]).optional(),
  "display": z.string().optional(),
  "shoppingListId": z.string(),
  "checked": z.boolean().optional(),
  "position": z.number().int().optional(),
  "foodId": z.union([z.string(), z.null()]).optional(),
  "labelId": z.union([z.string(), z.null()]).optional(),
  "unitId": z.union([z.string(), z.null()]).optional(),
  "extras": z.union([z.record(z.any()), z.null()]).optional(),
  "recipeReferences": z.array(z.union([z.object({ "recipeId": z.string(), "recipeQuantity": z.number(), "recipeScale": z.union([z.number(), z.null()]), "recipeNote": z.union([z.string(), z.null()]).optional() }), z.object({ "recipeId": z.string(), "recipeQuantity": z.number(), "recipeScale": z.union([z.number(), z.null()]), "recipeNote": z.union([z.string(), z.null()]).optional(), "id": z.string(), "shoppingListItemId": z.string() })])).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}