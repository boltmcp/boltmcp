import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customers_updatecustomerphonenumber",
  "toolDescription": "Updates a customer's phone number.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/customers/{customerId}/phoneNumbers/{type}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "customerId": "customerId",
      "type": "type"
    },
    "body": {
      "countryCode": "countryCode",
      "areaCode": "areaCode",
      "number": "number",
      "extension": "extension"
    }
  },
  inputParamsSchema
}

export default tool