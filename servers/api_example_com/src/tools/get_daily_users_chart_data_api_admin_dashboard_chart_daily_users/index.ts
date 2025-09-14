import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_daily_users_chart_data_api_admin_dashboard_chart_daily_users",
  "toolDescription": "Get Daily Users Chart Data",
  "baseUrl": "https://api.example.com",
  "path": "/api/admin/dashboard-chart/daily-users",
  "method": "get",
  "security": [],
  "paramsMap": {
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