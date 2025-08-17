import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "debug_totalization_modules_api_tags_debug_totalization_modules_g",
  "toolDescription": "[DEBUG] Verificar módulos de totalização por empresa",
  "baseUrl": "https://api.example.com",
  "path": "/api/tags/debug/totalization-modules",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool