import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_subscription_history_biz_groups_subscription_history_get",
  "toolDescription": "Get Subscription History",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/biz-groups/subscription-history",
  "method": "get",
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
      "limit": "limit",
      "token": "token",
      "is_active": "is_active",
      "price_type": "price_type"
    }
  },
  inputParamsSchema
}

export default tool