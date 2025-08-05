import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listdraftpayment",
  "toolDescription": "List draft payments",
  "baseUrl": "https://apis.revolut.com",
  "path": "/draft-payments",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "from": "from",
      "to": "to",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool