import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bills_addlineitemtobill",
  "toolDescription": "Creates a new line item within an existing bill.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/bills/{billId}/lineItems",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "billId": "billId"
    },
    "body": {
      "lineNumber": "lineNumber",
      "project": "project",
      "itemDetails": "itemDetails",
      "accountDetails": "accountDetails",
      "description": "description",
      "taxRate": "taxRate",
      "taxAmount": "taxAmount"
    }
  },
  inputParamsSchema
}

export default tool