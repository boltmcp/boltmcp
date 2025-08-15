import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "estimates_createestimate",
  "toolDescription": "Creates a new estimate.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/estimates",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "customer": "customer",
      "estimateDate": "estimateDate",
      "estimateExpiryDate": "estimateExpiryDate",
      "amountTaxStatus": "amountTaxStatus",
      "reference": "reference",
      "classification": "classification",
      "template": "template",
      "lineItems": "lineItems",
      "notes": "notes",
      "termsAndConditions": "termsAndConditions",
      "paymentNotes": "paymentNotes"
    }
  },
  inputParamsSchema
}

export default tool