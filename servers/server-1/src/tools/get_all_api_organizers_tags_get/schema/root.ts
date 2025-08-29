import { z } from "zod"

export const inputParamsSchema = {
  "search": z.union([z.string(), z.null()]).optional(),
  "orderBy": z.union([z.string(), z.null()]).optional(),
  "orderByNullPosition": z.union([z.enum(["first","last"]), z.null()]).optional(),
  "orderDirection": z.enum(["asc","desc"]).optional(),
  "queryFilter": z.union([z.string(), z.null()]).optional(),
  "paginationSeed": z.union([z.string(), z.null()]).optional(),
  "page": z.number().int().optional(),
  "perPage": z.number().int().optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}