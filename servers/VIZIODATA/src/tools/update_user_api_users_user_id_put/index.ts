import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_user_api_users_user_id_put",
  "toolDescription": "Update user",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/users/{user_id}",
  "method": "put",
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
      "email": "email",
      "full_name": "full_name",
      "password": "password",
      "is_active": "is_active",
      "is_superuser": "is_superuser",
      "theme_preference": "theme_preference"
    }
  },
  inputParamsSchema
}

export default tool