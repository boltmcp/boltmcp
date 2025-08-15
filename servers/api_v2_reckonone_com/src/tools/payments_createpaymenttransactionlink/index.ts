import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payments_createpaymenttransactionlink",
  "toolDescription": "Creates a new transaction link.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/payments/{paymentId}/transactionLinks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "paymentId": "paymentId"
    },
    "body": {
      "transactionType": "transactionType",
      "transactionId": "transactionId",
      "transactionAmount": "transactionAmount"
    }
  },
  inputParamsSchema
}

export default tool