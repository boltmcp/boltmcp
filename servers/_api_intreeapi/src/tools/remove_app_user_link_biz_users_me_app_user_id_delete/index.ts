import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_app_user_link_biz_users_me_app_user_id_delete",
  "toolDescription": "Remove App User Link",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-users/me/app-user-id",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool