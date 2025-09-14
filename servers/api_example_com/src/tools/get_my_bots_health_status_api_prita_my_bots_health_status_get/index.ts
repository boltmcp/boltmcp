import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_my_bots_health_status_api_prita_my_bots_health_status_get",
  "toolDescription": "Get My Bots Health Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/my-bots/health-status",
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