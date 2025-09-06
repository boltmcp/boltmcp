import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "verify_email_auth_verify_email_post",
  "toolDescription": "Verify Email",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/auth/verify-email",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "token": "token"
    }
  },
  inputParamsSchema
}

export default tool