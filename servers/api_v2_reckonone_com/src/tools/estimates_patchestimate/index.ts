import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "estimates_patchestimate",
  "toolDescription": "Updates selected fields of an existing estimate.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/estimates/{estimateId}",
  "method": "patch",
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
      "status": "status",
      "reference": "reference",
      "classification": "classification",
      "template": "template",
      "notes": "notes",
      "termsAndConditions": "termsAndConditions",
      "paymentNotes": "paymentNotes"
    }
  },
  inputParamsSchema
}

export default tool