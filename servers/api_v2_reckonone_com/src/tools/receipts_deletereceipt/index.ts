import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "receipts_deletereceipt",
  "toolDescription": "Deletes an existing receipt.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/receipts/{receiptId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "receiptId": "receiptId"
    }
  },
  inputParamsSchema
}

export default tool