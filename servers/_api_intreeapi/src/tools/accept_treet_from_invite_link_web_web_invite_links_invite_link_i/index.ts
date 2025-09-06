import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accept_treet_from_invite_link_web_web_invite_links_invite_link_i",
  "toolDescription": "Accept Treet From Invite Link Web",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/web/invite-links/{invite_link_id}/treet/accept",
  "method": "post",
  "security": [
    {
      "key": "X-Simple-Token",
      "value": "<mcp-env-var>X_SIMPLE_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "X_SIMPLE_TOKEN"
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