import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_received_invites_feed_invites_get",
  "toolDescription": "Get Received Invites",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/feed/invites",
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
      "embed_owner": "embed_owner",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool