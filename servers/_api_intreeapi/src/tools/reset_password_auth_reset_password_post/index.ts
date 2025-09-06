import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reset_password_auth_reset_password_post",
  "toolDescription": "Reset Password",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/auth/reset-password",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "token": "token",
      "new_password": "new_password"
    }
  },
  inputParamsSchema
}

export default tool