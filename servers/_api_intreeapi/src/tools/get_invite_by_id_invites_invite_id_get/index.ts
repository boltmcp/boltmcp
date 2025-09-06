import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_invite_by_id_invites_invite_id_get",
  "toolDescription": "Get Invite By Id",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/invites/{invite_id}",
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