import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "expenseclaims_patchlineitem",
  "toolDescription": "Updates selected fields of an existing line item within an existing expense claim.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/expenseclaims/{expenseClaimId}/lineitems/{lineItemId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "expenseClaimId": "expenseClaimId",
      "lineItemId": "lineItemId"
    },
    "body": {
      "lineNumber": "lineNumber",
      "date": "date",
      "project": "project",
      "supplier": "supplier",
      "customer": "customer",
      "isBillable": "isBillable",
      "billableStatus": "billableStatus",
      "itemDetails": "itemDetails",
      "accountDetails": "accountDetails",
      "description": "description",
      "taxAmount": "taxAmount",
      "taxRate": "taxRate",
      "taxIsModified": "taxIsModified",
      "notes": "notes"
    }
  },
  inputParamsSchema
}

export default tool