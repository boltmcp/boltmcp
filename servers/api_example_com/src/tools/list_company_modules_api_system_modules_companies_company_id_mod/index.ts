import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_company_modules_api_system_modules_companies_company_id_mod",
  "toolDescription": "Listar módulos da empresa",
  "baseUrl": "https://api.example.com",
  "path": "/api/system-modules/companies/{company_id}/modules/",
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
      "page": "page",
      "per_page": "per_page",
      "enabled_only": "enabled_only"
    }
  },
  inputParamsSchema
}

export default tool