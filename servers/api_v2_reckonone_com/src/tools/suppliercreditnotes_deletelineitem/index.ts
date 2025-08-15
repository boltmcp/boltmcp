import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliercreditnotes_deletelineitem",
  "toolDescription": "Deletes an existing supplier credit note's line item.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliercreditnotes/{supplierCreditNoteId}/lineItems/{lineItemId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "supplierCreditNoteId": "supplierCreditNoteId",
      "lineItemId": "lineItemId"
    }
  },
  inputParamsSchema
}

export default tool