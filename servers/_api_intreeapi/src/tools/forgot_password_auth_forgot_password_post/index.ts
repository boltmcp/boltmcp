import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "forgot_password_auth_forgot_password_post",
  "toolDescription": "Forgot Password",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/auth/forgot-password",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "email": "email"
    },
    "header": {
      "X-Firebase-AppCheck": "X-Firebase-AppCheck",
      "X-Recaptcha-Token": "X-Recaptcha-Token"
    }
  },
  inputParamsSchema
}

export default tool