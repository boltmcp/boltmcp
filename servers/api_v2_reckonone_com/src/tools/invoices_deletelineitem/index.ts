import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_deletelineitem",
  "toolDescription": "Deletes an existing line item.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices/{invoiceId}/lineitems/{lineItemId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "invoiceId": "invoiceId",
      "lineItemId": "lineItemId"
    },
    "query": {
      "ignoreWarnings": "ignoreWarnings"
    }
  },
  inputParamsSchema
}

export default tool