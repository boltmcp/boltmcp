import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_password_api_auth_update_password_post",
  "toolDescription": "Update Password",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/update-password",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "password": "password",
      "token": "token",
      "refreshToken": "refreshToken"
    }
  },
  inputParamsSchema
}

export default tool