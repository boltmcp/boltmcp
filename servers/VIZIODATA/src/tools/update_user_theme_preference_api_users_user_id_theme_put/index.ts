import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_user_theme_preference_api_users_user_id_theme_put",
  "toolDescription": "Update user theme preference",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/users/{user_id}/theme",
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
      "theme_preference": "theme_preference"
    }
  },
  inputParamsSchema
}

export default tool