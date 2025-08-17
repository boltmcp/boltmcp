import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_company_module_api_system_modules_companies_company_id_modul",
  "toolDescription": "Obter módulo específico da empresa",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/system-modules/companies/{company_id}/modules/{module_key}",
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
      "company_id": "company_id",
      "module_key": "module_key"
    }
  },
  inputParamsSchema
}

export default tool