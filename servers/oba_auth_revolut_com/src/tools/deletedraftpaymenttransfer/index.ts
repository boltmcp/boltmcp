import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletedraftpaymenttransfer",
  "toolDescription": "Delete a draft payment transfer",
  "baseUrl": "https://apis.revolut.com",
  "path": "/draft-payments/{DraftPaymentId}/transfers/{DraftPaymentTransferId}",
  "method": "delete",
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
      "DraftPaymentId": "DraftPaymentId",
      "DraftPaymentTransferId": "DraftPaymentTransferId"
    }
  },
  inputParamsSchema
}

export default tool