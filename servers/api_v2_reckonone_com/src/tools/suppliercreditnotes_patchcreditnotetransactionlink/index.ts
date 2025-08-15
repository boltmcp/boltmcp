import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliercreditnotes_patchcreditnotetransactionlink",
  "toolDescription": "Updates the amount of an existing transaction allocation linked to an existing supplier credit note.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliercreditnotes/{supplierCreditNoteId}/transactionlinks/{linkId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "supplierCreditNoteId": "supplierCreditNoteId",
      "linkId": "linkId"
    },
    "body": {
      "transactionAmount": "transactionAmount"
    }
  },
  inputParamsSchema
}

export default tool