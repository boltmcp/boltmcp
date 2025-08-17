import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_company_overview_api_data_usage_reports_overview_get",
  "toolDescription": "Get company usage overview",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-usage/reports/overview",
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
      "company_id": "company_id"
    }
  },
  inputParamsSchema
}

export default tool