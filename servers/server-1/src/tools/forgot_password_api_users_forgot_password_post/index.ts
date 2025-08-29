import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "forgot_password_api_users_forgot_password_post",
  "toolDescription": "Forgot Password",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/forgot-password",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "email": "email"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool