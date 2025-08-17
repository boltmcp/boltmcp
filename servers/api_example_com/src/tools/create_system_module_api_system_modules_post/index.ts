import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_system_module_api_system_modules_post",
  "toolDescription": "Criar módulo do sistema",
  "baseUrl": "https://api.example.com",
  "path": "/api/system-modules/",
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
    "body": {
      "active": "active",
      "hidden": "hidden",
      "module_key": "module_key",
      "name": "name",
      "description": "description",
      "category": "category",
      "version": "version",
      "is_available": "is_available",
      "requires_license": "requires_license",
      "depends_on_modules": "depends_on_modules",
      "icon": "icon",
      "color": "color",
      "sort_order": "sort_order"
    }
  },
  inputParamsSchema
}

export default tool