import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "set_email_users_me_email_post",
  "toolDescription": "Set Email",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/users/me/email",
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
    "body": {
      "email": "email"
    }
  },
  inputParamsSchema
}

export default tool