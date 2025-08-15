import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "expenseclaims_patchexpenseclaim",
  "toolDescription": "Updates selected fields of an existing expense claim.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/expenseclaims/{expenseClaimId}",
  "method": "patch",
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
      "status": "status",
      "declineReason": "declineReason",
      "notes": "notes"
    }
  },
  inputParamsSchema
}

export default tool