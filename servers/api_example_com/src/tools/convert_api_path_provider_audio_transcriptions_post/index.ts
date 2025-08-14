import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "convert_api_path_provider_audio_transcriptions_post",
  "toolDescription": "Convert",
  "baseUrl": "https://api.example.com",
  "path": "/api/{path_provider}/audio/transcriptions",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "path_provider": "path_provider"
    }
  },
  inputParamsSchema
}

export default tool