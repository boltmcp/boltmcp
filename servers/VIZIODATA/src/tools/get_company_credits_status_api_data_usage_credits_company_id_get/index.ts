import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_company_credits_status_api_data_usage_credits_company_id_get",
  "toolDescription": "Get company credits status",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-usage/credits/{company_id}",
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