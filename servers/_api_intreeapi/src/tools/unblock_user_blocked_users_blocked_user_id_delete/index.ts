import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "unblock_user_blocked_users_blocked_user_id_delete",
  "toolDescription": "Unblock User",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/blocked-users/{blocked_user_id}",
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
      "blocked_user_id": "blocked_user_id"
    }
  },
  inputParamsSchema
}

export default tool