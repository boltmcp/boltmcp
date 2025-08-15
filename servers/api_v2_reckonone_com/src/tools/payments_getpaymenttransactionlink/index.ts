import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payments_getpaymenttransactionlink",
  "toolDescription": "Gets an existing payment's linked transaction.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/payments/{paymentId}/transactionLinks/{linkId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "paymentId": "paymentId",
      "linkId": "linkId"
    }
  },
  inputParamsSchema
}

export default tool