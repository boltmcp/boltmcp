import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_company_branding_api_companies_company_id_branding_get",
  "toolDescription": "Get company branding",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/companies/{company_id}/branding",
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
    }
  },
  inputParamsSchema
}

export default tool