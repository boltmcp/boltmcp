import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customers_updatecustomercustomfield",
  "toolDescription": "Updates a customer's custom field.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/customers/{customerId}/customfields/{type}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "customerId": "customerId",
      "type": "type"
    },
    "body": {
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool