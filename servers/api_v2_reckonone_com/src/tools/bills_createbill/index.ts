import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bills_createbill",
  "toolDescription": "Creates a new bill.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/bills",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
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