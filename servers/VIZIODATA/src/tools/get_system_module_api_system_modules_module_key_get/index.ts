import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_system_module_api_system_modules_module_key_get",
  "toolDescription": "Obter módulo específico",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/system-modules/{module_key}",
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
      "module_key": "module_key"
    }
  },
  inputParamsSchema
}

export default tool