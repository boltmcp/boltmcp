import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payments_getallocatedandallocatablepaymenttransactions",
  "toolDescription": "Gets a list of transactions.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/payments/allocableTransactions/entity/{entityId}/payableType/{payableType}/{paymentId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "entityId": "entityId",
      "payableType": "payableType",
      "paymentId": "paymentId"
    }
  },
  inputParamsSchema
}

export default tool