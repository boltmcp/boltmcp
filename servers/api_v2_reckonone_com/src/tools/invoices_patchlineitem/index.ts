import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_patchlineitem",
  "toolDescription": "Updates selected fields of an existing line item within an existing invoice.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices/{invoiceId}/lineitems/{lineItemId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "invoiceId": "invoiceId",
      "lineItemId": "lineItemId"
    },
    "query": {
      "ignoreWarnings": "ignoreWarnings"
    },
    "body": {
      "lineNumber": "lineNumber",
      "serviceDate": "serviceDate",
      "project": "project",
      "itemDetails": "itemDetails",
      "accountDetails": "accountDetails",
      "description": "description",
      "taxAmount": "taxAmount",
      "taxRate": "taxRate",
      "taxIsModified": "taxIsModified",
      "isFullWidthDescription": "isFullWidthDescription"
    }
  },
  inputParamsSchema
}

export default tool