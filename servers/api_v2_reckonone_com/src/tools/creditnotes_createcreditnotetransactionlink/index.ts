import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "creditnotes_createcreditnotetransactionlink",
  "toolDescription": "Creates a new transaction link.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/creditNotes/{creditNoteId}/transactionLinks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "creditNoteId": "creditNoteId"
    },
    "body": {
      "transactionId": "transactionId",
      "transactionAmount": "transactionAmount",
      "transactionType": "transactionType"
    }
  },
  inputParamsSchema
}

export default tool