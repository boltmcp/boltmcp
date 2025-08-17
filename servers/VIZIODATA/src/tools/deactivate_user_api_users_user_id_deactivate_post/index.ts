import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deactivate_user_api_users_user_id_deactivate_post",
  "toolDescription": "Deactivate user",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/users/{user_id}/deactivate",
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
    "path": {
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool