import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_createtransactionlink",
  "toolDescription": "Applies an unallocated credit to an invoice.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices/{invoiceId}/transactionlinks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "invoiceId": "invoiceId"
    },
    "body": {
      "transactionType": "transactionType",
      "transactionId": "transactionId",
      "amount": "amount"
    }
  },
  inputParamsSchema
}

export default tool