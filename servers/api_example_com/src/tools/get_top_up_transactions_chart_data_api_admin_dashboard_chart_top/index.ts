import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_top_up_transactions_chart_data_api_admin_dashboard_chart_top",
  "toolDescription": "Get Top Up Transactions Chart Data",
  "baseUrl": "https://api.example.com",
  "path": "/api/admin/dashboard-chart/top-up-transactions",
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