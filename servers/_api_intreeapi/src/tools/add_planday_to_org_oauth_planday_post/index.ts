import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_planday_to_org_oauth_planday_post",
  "toolDescription": "Add Planday To Org",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/oauth/planday",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "org_id": "org_id",
      "secret": "secret"
    }
  },
  inputParamsSchema
}

export default tool