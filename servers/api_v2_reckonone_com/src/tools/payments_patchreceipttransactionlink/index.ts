import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payments_patchreceipttransactionlink",
  "toolDescription": "Updates selected fields of an existing payment's linked transaction.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/payments/{paymentId}/transactionlinks/{linkId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "paymentId": "paymentId",
      "linkId": "linkId"
    },
    "body": {
      "transactionAmount": "transactionAmount"
    }
  },
  inputParamsSchema
}

export default tool