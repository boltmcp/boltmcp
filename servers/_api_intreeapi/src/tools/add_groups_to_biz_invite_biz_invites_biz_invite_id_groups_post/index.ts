import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_groups_to_biz_invite_biz_invites_biz_invite_id_groups_post",
  "toolDescription": "Add Groups To Biz Invite",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-invites/{biz_invite_id}/groups",
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
      "biz_invite_id": "biz_invite_id"
    },
    "body": {
      "group_ids": "group_ids"
    }
  },
  inputParamsSchema
}

export default tool