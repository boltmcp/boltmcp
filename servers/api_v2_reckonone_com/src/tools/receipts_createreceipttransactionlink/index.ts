import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "receipts_createreceipttransactionlink",
  "toolDescription": "Creates a new transaction link.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/receipts/{receiptId}/transactionLinks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "receiptId": "receiptId"
    },
    "body": {
      "transactionId": "transactionId",
      "transactionAmount": "transactionAmount",
      "transactionType": "transactionType"
    }
  },
  inputParamsSchema
}

export default tool