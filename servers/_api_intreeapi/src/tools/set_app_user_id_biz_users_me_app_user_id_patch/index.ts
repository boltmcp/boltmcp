import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "set_app_user_id_biz_users_me_app_user_id_patch",
  "toolDescription": "Set App User Id",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-users/me/app-user-id",
  "method": "patch",
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
      "username": "username",
      "phone": "phone"
    }
  },
  inputParamsSchema
}

export default tool