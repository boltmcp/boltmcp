import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_pricing_templates_api_default_pricing_templates_get",
  "toolDescription": "List pricing templates",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/default-pricing/templates",
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
      "active_only": "active_only"
    }
  },
  inputParamsSchema
}

export default tool