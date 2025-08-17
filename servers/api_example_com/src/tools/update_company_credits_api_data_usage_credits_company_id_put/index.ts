import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_company_credits_api_data_usage_credits_company_id_put",
  "toolDescription": "Update company credits",
  "baseUrl": "https://api.example.com",
  "path": "/api/data-usage/credits/{company_id}",
  "method": "put",
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
      "company_id": "company_id"
    },
    "query": {
      "billing_period": "billing_period"
    },
    "body": {
      "contracted_credits": "contracted_credits",
      "auto_renew": "auto_renew",
      "notification_thresholds": "notification_thresholds",
      "active": "active"
    }
  },
  inputParamsSchema
}

export default tool