import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "block_user_blocked_users_post",
  "toolDescription": "Block User",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/blocked-users",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "blocked_user_id": "blocked_user_id"
    }
  },
  inputParamsSchema
}

export default tool