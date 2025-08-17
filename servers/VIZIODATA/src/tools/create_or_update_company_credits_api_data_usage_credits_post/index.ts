import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_or_update_company_credits_api_data_usage_credits_post",
  "toolDescription": "Create or update company credits",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-usage/credits",
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
    "body": {
      "company_id": "company_id",
      "billing_period": "billing_period",
      "contracted_credits": "contracted_credits",
      "auto_renew": "auto_renew",
      "notification_thresholds": "notification_thresholds",
      "currency": "currency"
    }
  },
  inputParamsSchema
}

export default tool