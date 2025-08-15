import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "receipts_createreceipt",
  "toolDescription": "Creates a new receipt.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/receipts",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "customer": "customer",
      "receiptDate": "receiptDate",
      "ledgerAccount": "ledgerAccount",
      "paymentMethod": "paymentMethod",
      "reference": "reference",
      "notes": "notes",
      "totalAmount": "totalAmount",
      "reconciliationStatus": "reconciliationStatus",
      "internalNotes": "internalNotes",
      "accountsReceivableLedgerAccount": "accountsReceivableLedgerAccount",
      "classification": "classification",
      "lineItems": "lineItems",
      "transactionLinks": "transactionLinks"
    }
  },
  inputParamsSchema
}

export default tool