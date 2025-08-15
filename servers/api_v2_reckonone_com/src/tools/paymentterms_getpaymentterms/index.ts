import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "paymentterms_getpaymentterms",
  "toolDescription": "Gets a list of payment terms.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/terms",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "query": {
      "page": "page",
      "perPage": "perPage"
    }
  },
  inputParamsSchema
}

export default tool