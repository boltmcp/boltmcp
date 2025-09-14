import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "forgot_password_api_auth_forgot_password_post",
  "toolDescription": "Forgot Password",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/forgot-password",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "email": "email",
      "redirect_to": "redirect_to"
    }
  },
  inputParamsSchema
}

export default tool