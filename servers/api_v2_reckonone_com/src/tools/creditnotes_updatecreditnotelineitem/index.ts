import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "creditnotes_updatecreditnotelineitem",
  "toolDescription": "Updates an existing credit note's line item.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/creditNotes/{creditNoteId}/lineItems/{lineItemId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "creditNoteId": "creditNoteId",
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