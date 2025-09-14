import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_template_bots_api_manajemen_bot_template_bots_get",
  "toolDescription": "Get Template Bots",
  "baseUrl": "https://api.example.com",
  "path": "/api/manajemen-bot/template-bots",
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