import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createdraftpayment",
  "toolDescription": "Create a draft payment",
  "baseUrl": "https://apis.revolut.com",
  "path": "/draft-payments",
  "method": "post",
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
      "scheduledDate": "scheduledDate",
      "title": "title"
    },
    "header": {
      "x-idempotency-key": "x-idempotency-key"
    }
  },
  inputParamsSchema
}

export default tool