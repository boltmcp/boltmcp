import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_tags_api_tags_get",
  "toolDescription": "List all tags",
  "baseUrl": "https://api.example.com",
  "path": "/api/tags/",
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
      "machine_id": "machine_id",
      "search": "search",
      "active_only": "active_only",
      "show_hidden": "show_hidden"
    }
  },
  inputParamsSchema
}

export default tool