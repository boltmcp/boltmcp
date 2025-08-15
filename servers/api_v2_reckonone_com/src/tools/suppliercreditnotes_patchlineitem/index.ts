import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliercreditnotes_patchlineitem",
  "toolDescription": "Updates selected fields of an existing line item within an existing supplier credit note.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliercreditnotes/{supplierCreditNoteId}/lineitems/{lineItemId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "supplierCreditNoteId": "supplierCreditNoteId",
      "lineItemId": "lineItemId"
    },
    "body": {
      "lineNumber": "lineNumber",
      "project": "project",
      "itemDetails": "itemDetails",
      "accountDetails": "accountDetails",
      "description": "description",
      "taxRate": "taxRate",
      "taxAmount": "taxAmount"
    }
  },
  inputParamsSchema
}

export default tool