import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_monthly_revenue_chart_data_api_admin_dashboard_chart_monthly",
  "toolDescription": "Get Monthly Revenue Chart Data",
  "baseUrl": "https://api.example.com",
  "path": "/api/admin/dashboard-chart/monthly-revenue",
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