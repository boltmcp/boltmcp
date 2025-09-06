import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "disconnect_planday_oauth_oauth_planday_delete",
  "toolDescription": "Disconnect Planday Oauth",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/oauth/planday",
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
    "query": {
      "org_id": "org_id"
    }
  },
  inputParamsSchema
}

export default tool