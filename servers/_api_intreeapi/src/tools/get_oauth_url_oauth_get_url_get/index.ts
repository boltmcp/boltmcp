import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_oauth_url_oauth_get_url_get",
  "toolDescription": "Get Oauth Url",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/oauth/get-url",
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
      "integration": "integration",
      "redirect_url": "redirect_url",
      "community_id": "community_id"
    }
  },
  inputParamsSchema
}

export default tool