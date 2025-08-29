import { z } from "zod"

export const inputParamsSchema = {
  "recipe_id": z.string(),
  "file_name": z.enum(["original.webp","min-original.webp","tiny-original.webp"])
}