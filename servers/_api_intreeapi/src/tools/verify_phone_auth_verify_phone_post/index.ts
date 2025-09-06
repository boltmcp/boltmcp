import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "verify_phone_auth_verify_phone_post",
  "toolDescription": "Verify Phone",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/auth/verify-phone",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "full_name": "full_name",
      "dev_access_expiry_minutes": "dev_access_expiry_minutes",
      "dev_refresh_expiry_minutes": "dev_refresh_expiry_minutes",
      "phone": "phone",
      "otp_code": "otp_code",
      "device": "device",
      "username": "username",
      "date_of_birth": "date_of_birth"
    }
  },
  inputParamsSchema
}

export default tool