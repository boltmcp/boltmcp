import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_invite_aspect_invite_aspects_invite_aspect_id_delete",
  "toolDescription": "Delete Invite Aspect",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/invite-aspects/{invite_aspect_id}",
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
      "invite_aspect_id": "invite_aspect_id"
    }
  },
  inputParamsSchema
}

export default tool