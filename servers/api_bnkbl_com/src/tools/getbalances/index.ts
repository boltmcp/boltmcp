import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbalances",
  "toolDescription": "Get account balance",
  "baseUrl": "https://api.bnkbl.com",
  "path": "/investor/{account_id}/balances",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "account_id": "account_id"
    }
  },
  inputParamsSchema
}

export default tool