import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_partnership_invite_link_biz_partnership_invite_links_get",
  "toolDescription": "Get Partnership Invite Link",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-partnership-invite-links",
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
      "shorturl": "shorturl",
      "embed_groups": "embed_groups"
    }
  },
  inputParamsSchema
}

export default tool