import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_available_users_api_permissions_available_users_get",
  "toolDescription": "List available users for permissions",
  "baseUrl": "https://api.example.com",
  "path": "/api/permissions/available-users",
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
      "company_id": "company_id"
    }
  },
  inputParamsSchema
}

export default tool