import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "paymentterms_getpaymentterm",
  "toolDescription": "Gets a payment term.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/terms/{termId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "termId": "termId"
    }
  },
  inputParamsSchema
}

export default tool