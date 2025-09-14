import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_overview_stats_api_chila_overview_stats_chila_id_get",
  "toolDescription": "Get Overview Stats",
  "baseUrl": "https://api.example.com",
  "path": "/api/chila/overview-stats/{chila_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "chila_id": "chila_id"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool