import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payments_patchpayment",
  "toolDescription": "Updates selected fields of an existing payment.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/payments/{paymentId}",
  "method": "patch",
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
      "totalAmount": "totalAmount",
      "reconciliationStatus": "reconciliationStatus",
      "internalNotes": "internalNotes",
      "classification": "classification"
    }
  },
  inputParamsSchema
}

export default tool