import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customers_createcustomerphonenumber",
  "toolDescription": "Adds a new phone number to an existing customer.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/customers/{customerId}/phoneNumbers",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "customerId": "customerId"
    },
    "body": {
      "countryCode": "countryCode",
      "areaCode": "areaCode",
      "number": "number",
      "extension": "extension",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool