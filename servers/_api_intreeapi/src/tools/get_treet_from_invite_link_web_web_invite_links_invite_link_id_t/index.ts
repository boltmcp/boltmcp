import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_treet_from_invite_link_web_web_invite_links_invite_link_id_t",
  "toolDescription": "Get Treet From Invite Link Web",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/web/invite-links/{invite_link_id}/treet",
  "method": "get",
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
    },
    "query": {
      "embed_cover_image": "embed_cover_image",
      "embed_hub": "embed_hub",
      "error_if_expired": "error_if_expired"
    }
  },
  inputParamsSchema
}

export default tool