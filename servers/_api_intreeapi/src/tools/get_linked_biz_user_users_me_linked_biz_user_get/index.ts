import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_linked_biz_user_users_me_linked_biz_user_get",
  "toolDescription": "Get Linked Biz User",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/users/me/linked-biz-user",
  "method": "get",
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