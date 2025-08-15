import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "creditnotes_createcreditnote",
  "toolDescription": "Creates a new credit note.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/creditNotes",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
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