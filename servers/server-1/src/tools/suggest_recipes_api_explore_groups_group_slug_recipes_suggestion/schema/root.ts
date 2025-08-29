import { z } from "zod"

export const inputParamsSchema = {
  "group_slug": z.string(),
  "foods": z.union([z.array(z.string()), z.null()]).optional(),
  "tools": z.union([z.array(z.string()), z.null()]).optional(),
  "orderBy": z.union([z.string(), z.null()]).optional(),
  "orderByNullPosition": z.union([z.enum(["first","last"]), z.null()]).optional(),
  "orderDirection": z.enum(["asc","desc"]).optional(),
  "queryFilter": z.union([z.string(), z.null()]).optional(),
  "paginationSeed": z.union([z.string(), z.null()]).optional(),
  "limit": z.number().int().optional(),
  "maxMissingFoods": z.number().int().optional(),
  "maxMissingTools": z.number().int().optional(),
  "includeFoodsOnHand": z.boolean().optional(),
  "includeToolsOnHand": z.boolean().optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}