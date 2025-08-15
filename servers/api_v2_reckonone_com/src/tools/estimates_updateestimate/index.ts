import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "estimates_updateestimate",
  "toolDescription": "Updates an existing estimate.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/estimates/{estimateId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "estimateId": "estimateId"
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