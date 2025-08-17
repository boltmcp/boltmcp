import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_company_module_api_system_modules_companies_company_id_mo",
  "toolDescription": "Atualizar módulo da empresa",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/system-modules/companies/{company_id}/modules/{module_key}",
  "method": "put",
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
    },
    "body": {
      "active": "active",
      "hidden": "hidden",
      "marked_for_deletion": "marked_for_deletion",
      "enabled": "enabled",
      "settings": "settings",
      "license_expires_at": "license_expires_at",
      "max_users": "max_users",
      "max_records": "max_records"
    }
  },
  inputParamsSchema
}

export default tool