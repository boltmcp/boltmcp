import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_received_biz_invites_biz_invites_get",
  "toolDescription": "Get Received Biz Invites",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.1/biz-invites",
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
      "embed_business": "embed_business"
    }
  },
  inputParamsSchema
}

export default tool