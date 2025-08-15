import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bills_patchbill",
  "toolDescription": "Updates selected fields of an existing bill.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/bills/{billId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "billId": "billId"
    },
    "body": {
      "supplier": "supplier",
      "billDate": "billDate",
      "dueDate": "dueDate",
      "billDiscountAmount": "billDiscountAmount",
      "billDiscountPercent": "billDiscountPercent",
      "amountTaxStatus": "amountTaxStatus",
      "status": "status",
      "reference": "reference",
      "classification": "classification",
      "template": "template",
      "notes": "notes"
    }
  },
  inputParamsSchema
}

export default tool