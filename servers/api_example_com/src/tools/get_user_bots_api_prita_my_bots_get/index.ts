import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_user_bots_api_prita_my_bots_get",
  "toolDescription": "Get User Bots",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/my-bots",
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