import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_invite_owner_invites_invite_id_owner_get",
  "toolDescription": "Get Invite Owner",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/invites/{invite_id}/owner",
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
      "invite_id": "invite_id"
    }
  },
  inputParamsSchema
}

export default tool