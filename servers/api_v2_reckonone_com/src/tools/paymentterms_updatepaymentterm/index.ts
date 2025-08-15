import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "paymentterms_updatepaymentterm",
  "toolDescription": "Updates an existing payment term.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/terms/{termId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "termId": "termId"
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