import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_updatelineitem",
  "toolDescription": "Updates an existing line item within an existing invoice.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices/{invoiceId}/lineItems/{lineItemId}",
  "method": "put",
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
      "isFullWidthDescription": "isFullWidthDescription",
      "parentLineId": "parentLineId",
      "rowType": "rowType",
      "group": "group",
      "transactionLinks": "transactionLinks"
    }
  },
  inputParamsSchema
}

export default tool