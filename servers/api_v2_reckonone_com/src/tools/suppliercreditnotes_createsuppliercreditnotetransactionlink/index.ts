import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliercreditnotes_createsuppliercreditnotetransactionlink",
  "toolDescription": "Creates a new transaction link.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliercreditNotes/{supplierCreditNoteId}/transactionLinks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "supplierCreditNoteId": "supplierCreditNoteId"
    },
    "body": {
      "transactionType": "transactionType",
      "transactionId": "transactionId",
      "transactionAmount": "transactionAmount"
    }
  },
  inputParamsSchema
}

export default tool