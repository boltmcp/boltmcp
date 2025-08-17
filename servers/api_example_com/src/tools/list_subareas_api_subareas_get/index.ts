import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_subareas_api_subareas_get",
  "toolDescription": "List all subareas",
  "baseUrl": "https://api.example.com",
  "path": "/api/subareas/",
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
      "area_id": "area_id",
      "search": "search",
      "active_only": "active_only",
      "show_hidden": "show_hidden"
    }
  },
  inputParamsSchema
}

export default tool