import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "verify_email_auth_verify_email_get",
  "toolDescription": "Verify Email",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/auth/verify-email",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "token": "token"
    }
  },
  inputParamsSchema
}

export default tool