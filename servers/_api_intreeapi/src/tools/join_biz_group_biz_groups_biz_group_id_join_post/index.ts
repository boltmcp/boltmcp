import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "join_biz_group_biz_groups_biz_group_id_join_post",
  "toolDescription": "Join Biz Group",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/biz-groups/{biz_group_id}/join",
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
      "biz_group_id": "biz_group_id"
    },
    "body": {
      "biz_invite_id": "biz_invite_id",
      "biz_invite_link_id": "biz_invite_link_id"
    }
  },
  inputParamsSchema
}

export default tool