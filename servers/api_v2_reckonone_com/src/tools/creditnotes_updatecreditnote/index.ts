import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "creditnotes_updatecreditnote",
  "toolDescription": "Updates an existing credit note.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/creditNotes/{creditNoteId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "creditNoteId": "creditNoteId"
    },
    "body": {
      "customer": "customer",
      "creditNoteDate": "creditNoteDate",
      "amountTaxStatus": "amountTaxStatus",
      "reference": "reference",
      "accountsReceivableLedgerAccount": "accountsReceivableLedgerAccount",
      "classification": "classification",
      "template": "template",
      "lineItems": "lineItems",
      "notes": "notes"
    }
  },
  inputParamsSchema
}

export default tool