import { z } from "zod"

export const inputParamsSchema = {
  "testMessage": z.boolean().optional(),
  "webhookTask": z.boolean().optional(),
  "recipeCreated": z.boolean().optional(),
  "recipeUpdated": z.boolean().optional(),
  "recipeDeleted": z.boolean().optional(),
  "userSignup": z.boolean().optional(),
  "dataMigrations": z.boolean().optional(),
  "dataExport": z.boolean().optional(),
  "dataImport": z.boolean().optional(),
  "mealplanEntryCreated": z.boolean().optional(),
  "shoppingListCreated": z.boolean().optional(),
  "shoppingListUpdated": z.boolean().optional(),
  "shoppingListDeleted": z.boolean().optional(),
  "cookbookCreated": z.boolean().optional(),
  "cookbookUpdated": z.boolean().optional(),
  "cookbookDeleted": z.boolean().optional(),
  "tagCreated": z.boolean().optional(),
  "tagUpdated": z.boolean().optional(),
  "tagDeleted": z.boolean().optional(),
  "categoryCreated": z.boolean().optional(),
  "categoryUpdated": z.boolean().optional(),
  "categoryDeleted": z.boolean().optional()
}