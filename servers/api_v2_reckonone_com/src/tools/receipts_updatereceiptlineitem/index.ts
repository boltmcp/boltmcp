import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "receipts_updatereceiptlineitem",
  "toolDescription": "Updates an existing line item within an existing receipt.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/receipts/{receiptId}/lineItems/{lineItemId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "receiptId": "receiptId",
      "lineItemId": "lineItemId"
    },
    "body": {
      "lineNumber": "lineNumber",
      "project": "project",
      "itemDetails": "itemDetails",
      "accountDetails": "accountDetails",
      "description": "description",
      "taxAmount": "taxAmount",
      "taxRate": "taxRate",
      "taxIsModified": "taxIsModified"
    }
  },
  inputParamsSchema
}

export default tool