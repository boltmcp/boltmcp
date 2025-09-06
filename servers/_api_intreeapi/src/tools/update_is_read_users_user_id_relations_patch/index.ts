import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_is_read_users_user_id_relations_patch",
  "toolDescription": "Update Is Read",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/users/{user_id}/relations",
  "method": "patch",
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
    "body": {
      "is_read": "is_read"
    }
  },
  inputParamsSchema
}

export default tool