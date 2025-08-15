import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_getinvoicelineitem",
  "toolDescription": "Gets a line item from an invoice.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices/{invoiceId}/lineItems/{lineItemId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "invoiceId": "invoiceId",
      "lineItemId": "lineItemId"
    }
  },
  inputParamsSchema
}

export default tool