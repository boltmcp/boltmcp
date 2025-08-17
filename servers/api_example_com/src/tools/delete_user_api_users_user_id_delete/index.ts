import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_user_api_users_user_id_delete",
  "toolDescription": "Mark user for deletion",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/{user_id}",
  "method": "delete",
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
      "user_id": "user_id"
    },
    "query": {
      "permanent": "permanent"
    }
  },
  inputParamsSchema
}

export default tool