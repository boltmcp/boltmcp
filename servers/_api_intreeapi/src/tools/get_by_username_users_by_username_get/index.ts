import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_by_username_users_by_username_get",
  "toolDescription": "Get By Username",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/users/by-username",
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
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool