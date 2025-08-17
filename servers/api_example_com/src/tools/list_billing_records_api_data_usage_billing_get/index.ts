import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_billing_records_api_data_usage_billing_get",
  "toolDescription": "List billing records",
  "baseUrl": "https://api.example.com",
  "path": "/api/data-usage/billing",
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
    "query": {
      "company_id": "company_id",
      "billing_period": "billing_period",
      "is_processed": "is_processed"
    }
  },
  inputParamsSchema
}

export default tool