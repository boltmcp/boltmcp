import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_invite_by_id_invites_invite_id_delete",
  "toolDescription": "Delete Invite By Id",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/invites/{invite_id}",
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
      "invite_id": "invite_id"
    }
  },
  inputParamsSchema
}

export default tool