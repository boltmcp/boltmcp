import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_system_module_api_system_modules_module_key_put",
  "toolDescription": "Atualizar módulo do sistema",
  "baseUrl": "https://api.example.com",
  "path": "/api/system-modules/{module_key}",
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
      "module_key": "module_key"
    },
    "body": {
      "active": "active",
      "hidden": "hidden",
      "marked_for_deletion": "marked_for_deletion",
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