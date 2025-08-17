import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_company_logo_api_companies_company_id_logo_delete",
  "toolDescription": "Delete company logo",
  "baseUrl": "https://api.example.com",
  "path": "/api/companies/{company_id}/logo",
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