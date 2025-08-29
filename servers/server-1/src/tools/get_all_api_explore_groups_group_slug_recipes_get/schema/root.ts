import { z } from "zod"

export const inputParamsSchema = {
  "group_slug": z.string(),
  "categories": z.union([z.array(z.union([z.string(), z.string()])), z.null()]).optional(),
  "tags": z.union([z.array(z.union([z.string(), z.string()])), z.null()]).optional(),
  "tools": z.union([z.array(z.union([z.string(), z.string()])), z.null()]).optional(),
  "foods": z.union([z.array(z.union([z.string(), z.string()])), z.null()]).optional(),
  "households": z.union([z.array(z.union([z.string(), z.string()])), z.null()]).optional(),
  "orderBy": z.union([z.string(), z.null()]).optional(),
  "orderByNullPosition": z.union([z.enum(["first","last"]), z.null()]).optional(),
  "orderDirection": z.enum(["asc","desc"]).optional(),
  "queryFilter": z.union([z.string(), z.null()]).optional(),
  "paginationSeed": z.union([z.string(), z.null()]).optional(),
  "page": z.number().int().optional(),
  "perPage": z.number().int().optional(),
  "cookbook": z.union([z.string(), z.string(), z.null()]).optional(),
  "requireAllCategories": z.boolean().optional(),
  "requireAllTags": z.boolean().optional(),
  "requireAllTools": z.boolean().optional(),
  "requireAllFoods": z.boolean().optional(),
  "search": z.union([z.string(), z.null()]).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}