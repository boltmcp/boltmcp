import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_treet_invite_link_by_shorturl_treet_invite_links_get",
  "toolDescription": "Get Treet Invite Link By Shorturl",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/treet-invite-links",
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
      "shorturl": "shorturl"
    }
  },
  inputParamsSchema
}

export default tool