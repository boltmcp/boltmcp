import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "receipts_getallocatedandallocatablepaymenttransactions",
  "toolDescription": "Gets a list of transactions.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/receipts/allocableTransactions/entity/{entityId}/{receiptId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "entityId": "entityId",
      "receiptId": "receiptId"
    }
  },
  inputParamsSchema
}

export default tool