import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "v1_responses_v1_responses_post",
  "toolDescription": "V1 Responses",
  "baseUrl": "https://api.example.com",
  "path": "/v1/responses",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "provider": "provider"
    },
    "body": {
      "model": "model",
      "provider": "b_provider",
      "media": "media",
      "modalities": "modalities",
      "temperature": "temperature",
      "presence_penalty": "presence_penalty",
      "frequency_penalty": "frequency_penalty",
      "top_p": "top_p",
      "max_tokens": "max_tokens",
      "stop": "stop",
      "api_key": "api_key",
      "api_base": "api_base",
      "web_search": "web_search",
      "proxy": "proxy",
      "conversation": "conversation",
      "timeout": "timeout",
      "tool_calls": "tool_calls",
      "reasoning_effort": "reasoning_effort",
      "logit_bias": "logit_bias",
      "audio": "audio",
      "response_format": "response_format",
      "download_media": "download_media",
      "extra_body": "extra_body",
      "input": "input"
    }
  },
  inputParamsSchema
}

export default tool