import { z } from "zod"

export const inputParamsSchema = {
  "shorturl": z.string().regex(new RegExp("^[a-fA-F0-9]{8}$")),
  "embed_groups": z.boolean().optional()
}