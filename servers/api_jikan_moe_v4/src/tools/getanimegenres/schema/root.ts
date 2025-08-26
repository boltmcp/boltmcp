import { z } from "zod"

export const inputParamsSchema = {
  "filter": z.enum(["genres","explicit_genres","themes","demographics"]).describe("Filter genres by type").optional()
}