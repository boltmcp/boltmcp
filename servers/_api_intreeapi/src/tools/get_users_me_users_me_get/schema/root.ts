import { z } from "zod"

export const inputParamsSchema = {
  "embed_total_relations": z.boolean().optional(),
  "embed_total_aspects": z.boolean().optional(),
  "embed_total_communities": z.boolean().optional(),
  "embed_agrees_to_app_tos": z.boolean().optional()
}