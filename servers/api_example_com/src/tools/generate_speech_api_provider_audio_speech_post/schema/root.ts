import { z } from "zod"

export const inputParamsSchema = {
  "provider": z.string(),
  "input": z.string(),
  "model": z.union([z.string(), z.null()]).optional(),
  "b_provider": z.union([z.string(), z.null()]).optional(),
  "voice": z.union([z.string(), z.null()]).optional(),
  "instrcutions": z.string().optional(),
  "response_format": z.union([z.string(), z.null()]).optional(),
  "language": z.union([z.string(), z.null()]).optional(),
  "download_media": z.boolean().optional()
}