import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "finddraftpayment",
  "toolDescription": "Retrieve a draft payment",
  "baseUrl": "https://apis.revolut.com",
  "path": "/draft-payments/{DraftPaymentId}",
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
    "path": {
      "DraftPaymentId": "DraftPaymentId"
    }
  },
  inputParamsSchema
}

export default tool