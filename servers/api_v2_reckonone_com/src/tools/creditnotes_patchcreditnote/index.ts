import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "creditnotes_patchcreditnote",
  "toolDescription": "Updates selected fields of an existing credit note.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/creditNotes/{creditNoteId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "creditNoteId": "creditNoteId"
    },
    "body": {
      "customer": "customer",
      "creditNoteDate": "creditNoteDate",
      "status": "status",
      "reference": "reference",
      "accountsReceivableLedgerAccount": "accountsReceivableLedgerAccount",
      "classification": "classification",
      "template": "template",
      "notes": "notes"
    }
  },
  inputParamsSchema
}

export default tool