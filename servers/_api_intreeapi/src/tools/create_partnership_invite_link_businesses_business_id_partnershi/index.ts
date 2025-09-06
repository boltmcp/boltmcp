import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_partnership_invite_link_businesses_business_id_partnershi",
  "toolDescription": "Create Partnership Invite Link",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/partnership-invite-links",
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
      "business_id": "business_id"
    },
    "body": {
      "group_ids": "group_ids",
      "weekly_distributes": "weekly_distributes",
      "expires_at": "expires_at",
      "email": "email",
      "message": "message"
    }
  },
  inputParamsSchema
}

export default tool