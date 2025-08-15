import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "receipts_deletereceipttransactionlink",
  "toolDescription": "Deletes an existing receipt's linked transaction.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/receipts/{receiptId}/transactionlinks/{linkId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "receiptId": "receiptId",
      "linkId": "linkId"
    }
  },
  inputParamsSchema
}

export default tool