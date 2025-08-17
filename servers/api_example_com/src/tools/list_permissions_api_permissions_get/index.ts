import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_permissions_api_permissions_get",
  "toolDescription": "List all permissions",
  "baseUrl": "https://api.example.com",
  "path": "/api/permissions/",
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
      "user_id": "user_id",
      "permission_type": "permission_type",
      "entity_id": "entity_id",
      "active_only": "active_only"
    }
  },
  inputParamsSchema
}

export default tool