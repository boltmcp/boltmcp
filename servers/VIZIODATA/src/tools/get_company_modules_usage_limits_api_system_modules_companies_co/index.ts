import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_company_modules_usage_limits_api_system_modules_companies_co",
  "toolDescription": "Verificar limites de uso dos módulos",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/system-modules/companies/{company_id}/usage-limits",
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