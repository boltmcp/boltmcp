import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "convert_v1_audio_transcriptions_post",
  "toolDescription": "Convert",
  "baseUrl": "https://api.example.com",
  "path": "/v1/audio/transcriptions",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "path_provider": "path_provider"
    }
  },
  inputParamsSchema
}

export default tool