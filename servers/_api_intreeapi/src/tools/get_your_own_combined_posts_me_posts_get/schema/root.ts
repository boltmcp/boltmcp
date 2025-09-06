import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "embed_gallery": z.boolean().optional(),
  "post_type": z.union([z.enum(["biz","aspect"]).describe("The type of a post.\n\n`biz`: a post made to a biz\n\n`aspect`: a post made to an aspect"), z.null()]).optional()
}