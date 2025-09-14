import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_performance_chart_api_prita_performance_chart_prita_id_get",
  "toolDescription": "Get Performance Chart",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/performance-chart/{prita_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "prita_id": "prita_id"
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