import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_system_modules_api_system_modules_get",
  "toolDescription": "Listar módulos disponíveis",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/system-modules/",
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
    "query": {
      "page": "page",
      "per_page": "per_page",
      "search": "search",
      "category": "category",
      "available_only": "available_only"
    }
  },
  inputParamsSchema
}

export default tool