import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bills_updatebill",
  "toolDescription": "Updates an existing bill.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/bills/{billId}",
  "method": "put",
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
      "reference": "reference",
      "classification": "classification",
      "template": "template",
      "lineItems": "lineItems",
      "notes": "notes"
    }
  },
  inputParamsSchema
}

export default tool