import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_timeout_for_user_businesses_business_id_users_user_id_tim",
  "toolDescription": "Create Timeout For User",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/users/{user_id}/timeout",
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
    "path": {
      "user_id": "user_id",
      "business_id": "business_id"
    },
    "body": {
      "timeout_duration_minutes": "timeout_duration_minutes",
      "reason": "reason"
    }
  },
  inputParamsSchema
}

export default tool