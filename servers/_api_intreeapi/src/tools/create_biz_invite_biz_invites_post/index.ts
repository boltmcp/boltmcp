import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_biz_invite_biz_invites_post",
  "toolDescription": "Create Biz Invite",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-invites",
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
      "phone": "phone",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool