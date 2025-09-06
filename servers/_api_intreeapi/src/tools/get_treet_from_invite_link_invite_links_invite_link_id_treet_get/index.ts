import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_treet_from_invite_link_invite_links_invite_link_id_treet_get",
  "toolDescription": "Get Treet From Invite Link",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.1/invite-links/{invite_link_id}/treet",
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