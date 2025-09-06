import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "unban_user_from_business_biz_banned_users_biz_banned_user_id_del",
  "toolDescription": "Unban User From Business",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-banned-users/{biz_banned_user_id}",
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
    "path": {
      "biz_banned_user_id": "biz_banned_user_id"
    }
  },
  inputParamsSchema
}

export default tool