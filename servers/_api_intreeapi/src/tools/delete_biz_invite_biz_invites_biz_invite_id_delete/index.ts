import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_biz_invite_biz_invites_biz_invite_id_delete",
  "toolDescription": "Delete Biz Invite",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-invites/{biz_invite_id}",
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
      "biz_invite_id": "biz_invite_id"
    }
  },
  inputParamsSchema
}

export default tool