import { z } from "zod"

export const inputParamsSchema = {
  "imports": z.array(z.object({ "url": z.string(), "categories": z.union([z.array(z.object({ "id": z.union([z.string(), z.null()]).optional(), "groupId": z.union([z.string(), z.null()]).optional(), "name": z.string(), "slug": z.string() })), z.null()]).optional(), "tags": z.union([z.array(z.object({ "id": z.union([z.string(), z.null()]).optional(), "groupId": z.union([z.string(), z.null()]).optional(), "name": z.string(), "slug": z.string() })), z.null()]).optional() })),
  "accept-language": z.union([z.string(), z.null()]).optional()
}