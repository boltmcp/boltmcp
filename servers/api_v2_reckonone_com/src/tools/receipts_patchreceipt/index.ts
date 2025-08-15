import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "receipts_patchreceipt",
  "toolDescription": "Updates selected fields of an existing receipt.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/receipts/{receiptId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "receiptId": "receiptId"
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
      "classification": "classification"
    }
  },
  inputParamsSchema
}

export default tool