import { z } from "zod"

export const inputParamsSchema = {
  "provider": z.string(),
  "prompt": z.string(),
  "model": z.union([z.string(), z.null()]).optional(),
  "b_provider": z.union([z.string(), z.null()]).optional(),
  "response_format": z.union([z.string(), z.null()]).optional(),
  "api_key": z.union([z.string(), z.null()]).optional(),
  "proxy": z.union([z.string(), z.null()]).optional(),
  "width": z.union([z.number().int(), z.null()]).optional(),
  "height": z.union([z.number().int(), z.null()]).optional(),
  "num_inference_steps": z.union([z.number().int(), z.null()]).optional(),
  "seed": z.union([z.number().int(), z.null()]).optional(),
  "guidance_scale": z.union([z.number().int(), z.null()]).optional(),
  "aspect_ratio": z.union([z.string(), z.null()]).optional(),
  "n": z.union([z.number().int(), z.null()]).optional(),
  "negative_prompt": z.union([z.string(), z.null()]).optional(),
  "resolution": z.union([z.string(), z.null()]).optional(),
  "audio": z.union([z.record(z.any()), z.null()]).optional(),
  "download_media": z.boolean().optional()
}