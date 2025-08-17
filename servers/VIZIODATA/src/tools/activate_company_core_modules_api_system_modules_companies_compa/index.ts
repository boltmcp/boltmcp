import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activate_company_core_modules_api_system_modules_companies_compa",
  "toolDescription": "Ativar módulos CORE para empresa",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/system-modules/companies/{company_id}/activate-core",
  "method": "post",
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