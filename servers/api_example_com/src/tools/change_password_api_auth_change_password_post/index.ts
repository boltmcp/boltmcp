import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "change_password_api_auth_change_password_post",
  "toolDescription": "Change password",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/change-password",
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
      "current_password": "current_password",
      "new_password": "new_password"
    }
  },
  inputParamsSchema
}

export default tool