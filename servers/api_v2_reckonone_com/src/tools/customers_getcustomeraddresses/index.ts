import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customers_getcustomeraddresses",
  "toolDescription": "Gets a customer's addresses.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/customers/{customerId}/addresses",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "customerId": "customerId"
    }
  },
  inputParamsSchema
}

export default tool