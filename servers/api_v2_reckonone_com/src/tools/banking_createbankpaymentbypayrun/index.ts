import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "banking_createbankpaymentbypayrun",
  "toolDescription": "Creates a bank payment from a payrun.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/banking/payruns/{payrunId}/bankpayments",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "payrunId": "payrunId"
    },
    "body": {
      "ignoreWarnings": "ignoreWarnings"
    }
  },
  inputParamsSchema
}

export default tool