import { z } from "zod"

export const inputParamsSchema = {
  "tag": z.string().describe("Clan tag"),
  "sort": z.enum(["playtime","worth","balance","votes","kdr","deaths","kills"]).describe("Sort by").optional()
}