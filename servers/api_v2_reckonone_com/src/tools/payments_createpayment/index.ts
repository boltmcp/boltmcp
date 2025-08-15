import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payments_createpayment",
  "toolDescription": "Creates a new payment.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/payments",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "supplier": "supplier",
      "paymentDate": "paymentDate",
      "ledgerAccount": "ledgerAccount",
      "paymentMethod": "paymentMethod",
      "reference": "reference",
      "notes": "notes",
      "reconciliationStatus": "reconciliationStatus",
      "internalNotes": "internalNotes",
      "accountsPayableLedgerAccount": "accountsPayableLedgerAccount",
      "classification": "classification",
      "transactionLinks": "transactionLinks",
      "lineItems": "lineItems",
      "totalAmount": "totalAmount"
    }
  },
  inputParamsSchema
}

export default tool