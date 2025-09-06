import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "login_google_biz_auth_login_google_post",
  "toolDescription": "Login Google Biz",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/auth/login-google",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "code": "code"
    }
  },
  inputParamsSchema
}

export default tool