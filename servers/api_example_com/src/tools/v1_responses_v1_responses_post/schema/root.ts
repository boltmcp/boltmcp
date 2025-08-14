import { z } from "zod"

export const inputParamsSchema = {
  "provider": z.string().optional(),
  "model": z.string().optional(),
  "b_provider": z.union([z.string(), z.null()]).optional(),
  "media": z.union([z.array(z.array(z.any()).min(2).max(2)), z.null()]).optional(),
  "modalities": z.union([z.array(z.string()), z.null()]).optional(),
  "temperature": z.union([z.number(), z.null()]).optional(),
  "presence_penalty": z.union([z.number(), z.null()]).optional(),
  "frequency_penalty": z.union([z.number(), z.null()]).optional(),
  "top_p": z.union([z.number(), z.null()]).optional(),
  "max_tokens": z.union([z.number().int(), z.null()]).optional(),
  "stop": z.union([z.array(z.string()), z.string(), z.null()]).optional(),
  "api_key": z.union([z.string(), z.record(z.string()), z.null()]).optional(),
  "api_base": z.string().optional(),
  "web_search": z.union([z.boolean(), z.null()]).optional(),
  "proxy": z.union([z.string(), z.null()]).optional(),
  "conversation": z.union([z.record(z.any()), z.null()]).optional(),
  "timeout": z.union([z.number().int(), z.null()]).optional(),
  "tool_calls": z.array(z.any()).optional(),
  "reasoning_effort": z.union([z.string(), z.null()]).optional(),
  "logit_bias": z.union([z.record(z.any()), z.null()]).optional(),
  "audio": z.union([z.record(z.any()), z.null()]).optional(),
  "response_format": z.union([z.record(z.any()), z.null()]).optional(),
  "download_media": z.boolean().optional(),
  "extra_body": z.union([z.record(z.any()), z.null()]).optional(),
  "input": z.union([z.array(z.record(z.union([z.string(), z.array(z.record(z.union([z.string(), z.record(z.string())])))]))), z.string()])
}