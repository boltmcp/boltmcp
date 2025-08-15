import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "receipts_patchreceipttransactionlink",
  "toolDescription": "Updates selected fields of an existing receipt's linked transaction.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/receipts/{receiptId}/transactionlinks/{linkId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "receiptId": "receiptId",
      "linkId": "linkId"
    },
    "body": {
      "transactionAmount": "transactionAmount"
    }
  },
  inputParamsSchema
}

export default tool