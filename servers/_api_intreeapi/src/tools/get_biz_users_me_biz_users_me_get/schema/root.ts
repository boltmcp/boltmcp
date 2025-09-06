import { z } from "zod"

export const inputParamsSchema = {
  "embed_agrees_to_hub_tos": z.boolean().optional()
}