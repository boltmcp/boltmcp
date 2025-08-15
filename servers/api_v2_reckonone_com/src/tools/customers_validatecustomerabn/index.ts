import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customers_validatecustomerabn",
  "toolDescription": "Validate a customer's ABN.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/customers/{customerId}/validateAbn",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "customerId": "customerId"
    },
    "body": {
      "abn": "abn"
    }
  },
  inputParamsSchema
}

export default tool