import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accept_treet_from_invite_link_invite_links_invite_link_id_treet_",
  "toolDescription": "Accept Treet From Invite Link",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/invite-links/{invite_link_id}/treet/accept",
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
      "invite_link_id": "invite_link_id"
    }
  },
  inputParamsSchema
}

export default tool