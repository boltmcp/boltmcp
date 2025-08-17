import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_usage_summary_api_data_usage_summary_billing_period_get",
  "toolDescription": "Get usage summary for period",
  "baseUrl": "https://api.example.com",
  "path": "/api/data-usage/summary/{billing_period}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "billing_period": "billing_period"
    },
    "query": {
      "company_id": "company_id"
    }
  },
  inputParamsSchema
}

export default tool