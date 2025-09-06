import { z } from "zod"

export const inputParamsSchema = {
  "category_id": z.array(z.string().uuid()).describe("Category ids to fetch names for. Example: `?category_id={num1}&category_id={num2}`"),
  "name": z.union([z.string(), z.null()]).optional(),
  "offset": z.number().int().optional(),
  "limit": z.number().int().optional()
}