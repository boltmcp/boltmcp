import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_invite_with_embedded_profile_by_id_old_biz_invites_biz_invit",
  "toolDescription": "Get Invite With Embedded Profile By Id Old",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.1/biz-invites/{biz_invite_id}",
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
    "path": {
      "biz_invite_id": "biz_invite_id"
    },
    "query": {
      "embed_groups": "embed_groups",
      "embed_total_members": "embed_total_members",
      "embed_total_passes": "embed_total_passes",
      "embed_total_posts": "embed_total_posts"
    }
  },
  inputParamsSchema
}

export default tool