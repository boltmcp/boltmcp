import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_your_account_users_me_delete",
  "toolDescription": "Delete Your Account",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/users/me",
  "method": "delete",
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
      "otp": "otp"
    }
  },
  inputParamsSchema
}

export default tool