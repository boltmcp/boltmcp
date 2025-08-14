import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "provider_chat_completions_api_provider_conversation_id_chat_comp",
  "toolDescription": "Provider Chat Completions",
  "baseUrl": "https://api.example.com",
  "path": "/api/{provider}/{conversation_id}/chat/completions",
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
    "path": {
      "provider": "provider",
      "conversation_id": "conversation_id"
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
      "messages": "messages",
      "stream": "stream",
      "image": "image",
      "image_name": "image_name",
      "images": "images",
      "tools": "tools",
      "parallel_tool_calls": "parallel_tool_calls",
      "tool_choice": "tool_choice",
      "conversation_id": "b_conversation_id"
    }
  },
  inputParamsSchema
}

export default tool