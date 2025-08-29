import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reset_password_api_users_reset_password_post",
  "toolDescription": "Reset Password",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/reset-password",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "token": "token",
      "email": "email",
      "password": "password",
      "passwordConfirm": "passwordConfirm"
    }
  },
  inputParamsSchema
}

export default tool