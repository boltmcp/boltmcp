import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_pending_invites_me_invites_get",
  "toolDescription": "Get Pending Invites",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/me/invites",
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
    "query": {
      "limit": "limit",
      "token": "token",
      "embed_invitee": "embed_invitee"
    }
  },
  inputParamsSchema
}

export default tool