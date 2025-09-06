import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "change_phone_number_users_me_phone_post",
  "toolDescription": "Change Phone Number",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/users/me/phone",
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
      "phone": "phone",
      "otp": "otp"
    }
  },
  inputParamsSchema
}

export default tool