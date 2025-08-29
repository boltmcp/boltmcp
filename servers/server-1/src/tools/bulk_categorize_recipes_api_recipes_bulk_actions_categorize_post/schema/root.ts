import { z } from "zod"

export const inputParamsSchema = {
  "recipes": z.array(z.string()),
  "categories": z.array(z.object({ "name": z.string(), "id": z.string(), "groupId": z.union([z.string(), z.null()]).optional(), "slug": z.string() })),
  "accept-language": z.union([z.string(), z.null()]).optional()
}