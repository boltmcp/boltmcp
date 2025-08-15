import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "expenseclaims_updateexpensclaim",
  "toolDescription": "Updates an existing expense claim.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/expenseclaims/{expenseClaimId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "expenseClaimId": "expenseClaimId"
    },
    "body": {
      "employee": "employee",
      "claimDate": "claimDate",
      "reference": "reference",
      "project": "project",
      "customer": "customer",
      "amountTaxStatus": "amountTaxStatus",
      "status": "status",
      "lineItems": "lineItems",
      "notes": "notes"
    }
  },
  inputParamsSchema
}

export default tool