import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_company_pricing_api_data_usage_pricing_company_id_delete",
  "toolDescription": "Delete company pricing configuration",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-usage/pricing/{company_id}",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool