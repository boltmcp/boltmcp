import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_coupon_usage_chart_data_api_admin_dashboard_chart_coupon_usa",
  "toolDescription": "Get Coupon Usage Chart Data",
  "baseUrl": "https://api.example.com",
  "path": "/api/admin/dashboard-chart/coupon-usage",
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