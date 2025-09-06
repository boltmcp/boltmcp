import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_invite_link_invite_links_post",
  "toolDescription": "Create Invite Link",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/invite-links",
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
      "treet_id": "treet_id",
      "expires_at": "expires_at",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool