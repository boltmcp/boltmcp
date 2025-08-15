import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "journals_updatelineitem",
  "toolDescription": "Updates an existing line item within an existing journal.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/journals/{journalId}/lineitems/{lineItemId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "journalId": "journalId",
      "lineItemId": "lineItemId"
    },
    "body": {
      "reconciliationStatus": "reconciliationStatus",
      "transactionType": "transactionType",
      "ledgerAccount": "ledgerAccount",
      "debit": "debit",
      "credit": "credit",
      "taxRate": "taxRate",
      "taxAmount": "taxAmount",
      "notes": "notes",
      "entity": "entity",
      "project": "project",
      "classification": "classification"
    }
  },
  inputParamsSchema
}

export default tool