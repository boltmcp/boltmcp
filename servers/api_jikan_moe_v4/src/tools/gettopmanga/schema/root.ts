import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["manga","novel","lightnovel","oneshot","doujin","manhwa","manhua"]).describe("Available Manga types").optional(),
  "filter": z.enum(["publishing","upcoming","bypopularity","favorite"]).describe("Top items filter types").optional(),
  "page": z.number().int().optional(),
  "limit": z.number().int().optional()
}