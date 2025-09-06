import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_biz_invite_link_biz_invite_links_post",
  "toolDescription": "Create Biz Invite Link",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-invite-links",
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
      "group_ids": "group_ids",
      "business_id": "business_id",
      "use_limit": "use_limit",
      "expires_at": "expires_at",
      "tag": "tag"
    }
  },
  inputParamsSchema
}

export default tool