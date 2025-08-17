import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activate_company_module_api_system_modules_companies_company_id_",
  "toolDescription": "Ativar módulo para empresa",
  "baseUrl": "https://api.example.com",
  "path": "/api/system-modules/companies/{company_id}/modules/",
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
    },
    "body": {
      "active": "active",
      "hidden": "hidden",
      "module_key": "module_key",
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