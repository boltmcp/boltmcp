import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "login_google_app_auth_login_google_post",
  "toolDescription": "Login Google App",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/auth/login-google",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "code": "code",
      "device": "device"
    }
  },
  inputParamsSchema
}

export default tool