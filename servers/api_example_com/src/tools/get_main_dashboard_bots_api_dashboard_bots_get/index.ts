import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_main_dashboard_bots_api_dashboard_bots_get",
  "toolDescription": "Get Main Dashboard Bots",
  "baseUrl": "https://api.example.com",
  "path": "/api/dashboard/bots",
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