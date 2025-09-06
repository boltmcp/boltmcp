import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_biz_users_me_biz_users_me_get",
  "toolDescription": "Get Biz Users Me",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-users/me",
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
      "embed_agrees_to_hub_tos": "embed_agrees_to_hub_tos"
    }
  },
  inputParamsSchema
}

export default tool