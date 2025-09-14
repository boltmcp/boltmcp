import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_my_bots_api_my_bots_get",
  "toolDescription": "Get My Bots",
  "baseUrl": "https://api.example.com",
  "path": "/api/my-bots",
  "method": "get",
  "security": [],
  "paramsMap": {
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool