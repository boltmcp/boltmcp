import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "verify_otp_auth_verify_otp_post",
  "toolDescription": "Verify Otp",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/auth/verify-otp",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "phone": "phone",
      "otp_code": "otp_code"
    }
  },
  inputParamsSchema
}

export default tool