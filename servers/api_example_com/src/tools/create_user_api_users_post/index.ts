import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_user_api_users_post",
  "toolDescription": "Create new user",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/",
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
      "email": "email",
      "full_name": "full_name",
      "is_active": "is_active",
      "is_superuser": "is_superuser",
      "theme_preference": "theme_preference",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool