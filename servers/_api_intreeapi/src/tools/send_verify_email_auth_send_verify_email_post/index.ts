import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_verify_email_auth_send_verify_email_post",
  "toolDescription": "Send Verify Email",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/auth/send-verify-email",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "query": "query"
    }
  },
  inputParamsSchema
}

export default tool