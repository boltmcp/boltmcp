import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_invite_link_expiry_invite_links_invite_link_id_expiry_pat",
  "toolDescription": "Update Invite Link Expiry",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/invite-links/{invite_link_id}/expiry",
  "method": "patch",
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
      "invite_link_id": "invite_link_id"
    },
    "body": {
      "expires_at": "expires_at"
    }
  },
  inputParamsSchema
}

export default tool