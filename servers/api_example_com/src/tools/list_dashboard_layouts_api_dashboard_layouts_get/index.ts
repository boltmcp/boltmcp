import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_dashboard_layouts_api_dashboard_layouts_get",
  "toolDescription": "List dashboard layouts",
  "baseUrl": "https://api.example.com",
  "path": "/api/dashboard-layouts/",
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
      "visibility": "visibility",
      "search": "search",
      "active_only": "active_only",
      "limit": "limit",
      "offset": "offset",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool