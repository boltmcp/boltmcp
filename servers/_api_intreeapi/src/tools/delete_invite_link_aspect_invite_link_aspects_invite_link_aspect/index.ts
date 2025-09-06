import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_invite_link_aspect_invite_link_aspects_invite_link_aspect",
  "toolDescription": "Delete Invite Link Aspect",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/invite-link-aspects/{invite_link_aspect_id}",
  "method": "delete",
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
      "invite_link_aspect_id": "invite_link_aspect_id"
    }
  },
  inputParamsSchema
}

export default tool