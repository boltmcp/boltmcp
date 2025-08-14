import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generate_speech_api_provider_audio_speech_post",
  "toolDescription": "Generate Speech",
  "baseUrl": "https://api.example.com",
  "path": "/api/{provider}/audio/speech",
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
      "provider": "provider"
    },
    "body": {
      "input": "input",
      "model": "model",
      "provider": "b_provider",
      "voice": "voice",
      "instrcutions": "instrcutions",
      "response_format": "response_format",
      "language": "language",
      "download_media": "download_media"
    }
  },
  inputParamsSchema
}

export default tool