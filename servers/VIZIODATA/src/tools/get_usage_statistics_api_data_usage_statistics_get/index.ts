import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_usage_statistics_api_data_usage_statistics_get",
  "toolDescription": "Get usage statistics",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-usage/statistics",
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
      "start_date": "start_date",
      "end_date": "end_date",
      "billing_period": "billing_period",
      "detailed": "detailed"
    }
  },
  inputParamsSchema
}

export default tool