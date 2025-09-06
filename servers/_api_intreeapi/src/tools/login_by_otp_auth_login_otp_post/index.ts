import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "login_by_otp_auth_login_otp_post",
  "toolDescription": "Login By Otp",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/auth/login-otp",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "dev_access_expiry_minutes": "dev_access_expiry_minutes",
      "dev_refresh_expiry_minutes": "dev_refresh_expiry_minutes",
      "phone": "phone",
      "otp_code": "otp_code",
      "device": "device"
    }
  },
  inputParamsSchema
}

export default tool