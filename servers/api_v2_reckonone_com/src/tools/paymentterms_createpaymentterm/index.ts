import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "paymentterms_createpaymentterm",
  "toolDescription": "Creates a new payment term.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/terms",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "name": "name",
      "description": "description",
      "status": "status",
      "isDefault": "isDefault",
      "useForInvoice": "useForInvoice",
      "netDueDay": "netDueDay",
      "netDueDaySelection": "netDueDaySelection",
      "isDueDateWeekend": "isDueDateWeekend",
      "isIssuedWithinDays": "isIssuedWithinDays",
      "issuedWithinDays": "issuedWithinDays"
    }
  },
  inputParamsSchema
}

export default tool