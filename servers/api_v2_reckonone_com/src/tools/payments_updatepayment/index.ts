import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payments_updatepayment",
  "toolDescription": "Updates an existing payment.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/payments/{paymentId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "paymentId": "paymentId"
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