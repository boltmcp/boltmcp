import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_company_credits_details_api_data_usage_credits_company_id_de",
  "toolDescription": "Get detailed company credits",
  "baseUrl": "https://api.example.com",
  "path": "/api/data-usage/credits/{company_id}/details",
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
      "billing_period": "billing_period"
    }
  },
  inputParamsSchema
}

export default tool