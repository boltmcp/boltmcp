import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ban_user_from_business_biz_banned_users_post",
  "toolDescription": "Ban User From Business",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-banned-users",
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
      "user_id": "user_id",
      "business_id": "business_id",
      "reason": "reason"
    }
  },
  inputParamsSchema
}

export default tool