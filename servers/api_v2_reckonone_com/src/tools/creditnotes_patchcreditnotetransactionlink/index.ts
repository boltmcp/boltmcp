import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "creditnotes_patchcreditnotetransactionlink",
  "toolDescription": "Updates selected fields of an existing credit note's linked transaction.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/creditNotes/{creditNoteId}/transactionlinks/{linkId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "creditNoteId": "creditNoteId",
      "linkId": "linkId"
    },
    "body": {
      "transactionAmount": "transactionAmount"
    }
  },
  inputParamsSchema
}

export default tool