import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_performance_chart_api_chila_performance_chart_chila_id_get",
  "toolDescription": "Get Performance Chart",
  "baseUrl": "https://api.example.com",
  "path": "/api/chila/performance-chart/{chila_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "chila_id": "chila_id"
    },
    "query": {
      "days": "days"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool