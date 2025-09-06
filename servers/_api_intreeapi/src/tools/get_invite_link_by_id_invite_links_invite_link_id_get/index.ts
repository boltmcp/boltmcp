import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_invite_link_by_id_invite_links_invite_link_id_get",
  "toolDescription": "Get Invite Link By Id",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/invite-links/{invite_link_id}",
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
    }
  },
  inputParamsSchema
}

export default tool