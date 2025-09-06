import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_biz_invite_link_old_biz_invite_links_get",
  "toolDescription": "Get Biz Invite Link Old",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.1/biz-invite-links",
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
      "link": "link",
      "embed_groups": "embed_groups",
      "embed_total_members": "embed_total_members",
      "embed_total_passes": "embed_total_passes",
      "embed_total_posts": "embed_total_posts"
    }
  },
  inputParamsSchema
}

export default tool