import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "process_billing_for_period_api_data_usage_billing_billing_period",
  "toolDescription": "Process billing for period",
  "baseUrl": "https://api.example.com",
  "path": "/api/data-usage/billing/{billing_period}/process",
  "method": "post",
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