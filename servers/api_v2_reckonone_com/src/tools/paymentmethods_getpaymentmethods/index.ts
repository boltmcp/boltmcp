import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "paymentmethods_getpaymentmethods",
  "toolDescription": "Gets a list of payment methods.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/paymentMethods",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    }
  },
  inputParamsSchema
}

export default tool