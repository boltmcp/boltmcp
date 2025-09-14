import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_user_bots_api_manajemen_bot_user_bots_get",
  "toolDescription": "Get User Bots",
  "baseUrl": "https://api.example.com",
  "path": "/api/manajemen-bot/user-bots",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page",
      "limit": "limit"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool