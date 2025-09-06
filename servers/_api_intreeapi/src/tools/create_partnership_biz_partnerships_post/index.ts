import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_partnership_biz_partnerships_post",
  "toolDescription": "Create Partnership",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-partnerships",
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
      "business_id": "business_id",
      "biz_partnership_invite_link_id": "biz_partnership_invite_link_id",
      "group_ids": "group_ids",
      "weekly_distributes": "weekly_distributes"
    }
  },
  inputParamsSchema
}

export default tool