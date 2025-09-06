import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_treet_invite_link_treet_invite_links_post",
  "toolDescription": "Create Treet Invite Link",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/treet-invite-links",
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
      "expires_at": "expires_at",
      "treet_id": "treet_id"
    }
  },
  inputParamsSchema
}

export default tool