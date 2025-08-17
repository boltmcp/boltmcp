import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_realtime_usage_api_data_usage_realtime_usage_company_id_get",
  "toolDescription": "Get real-time usage for company",
  "baseUrl": "https://api.example.com",
  "path": "/api/data-usage/realtime/usage/{company_id}",
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
      "company_id": "company_id"
    },
    "query": {
      "period": "period"
    }
  },
  inputParamsSchema
}

export default tool