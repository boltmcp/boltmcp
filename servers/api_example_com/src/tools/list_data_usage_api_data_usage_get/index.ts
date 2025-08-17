import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_data_usage_api_data_usage_get",
  "toolDescription": "List data usage records",
  "baseUrl": "https://api.example.com",
  "path": "/api/data-usage/",
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
      "user_id": "user_id",
      "usage_type": "usage_type",
      "endpoint": "endpoint",
      "start_date": "start_date",
      "end_date": "end_date",
      "billing_period": "billing_period",
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool