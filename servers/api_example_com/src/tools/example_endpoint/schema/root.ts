import { z } from "zod"

export const inputParamsSchema = {
  "slug": z.string(),
  "name": z.string()
}