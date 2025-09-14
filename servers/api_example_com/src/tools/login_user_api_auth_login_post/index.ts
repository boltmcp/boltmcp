import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "login_user_api_auth_login_post",
  "toolDescription": "Login User",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/login",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "email": "email",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool