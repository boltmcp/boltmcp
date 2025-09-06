import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generate_otp_auth_generate_otp_post",
  "toolDescription": "Generate Otp",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/auth/generate-otp",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "error_if_user_not_exists": "error_if_user_not_exists",
      "error_if_user_exists": "error_if_user_exists",
      "vendor_name": "vendor_name"
    },
    "body": {
      "phone": "phone"
    },
    "header": {
      "X-Firebase-AppCheck": "X-Firebase-AppCheck",
      "X-Recaptcha-Token": "X-Recaptcha-Token"
    }
  },
  inputParamsSchema
}

export default tool