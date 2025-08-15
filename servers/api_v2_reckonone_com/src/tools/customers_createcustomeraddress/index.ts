import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customers_createcustomeraddress",
  "toolDescription": "Adds a new address to an existing customer.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/customers/{customerId}/addresses",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "customerId": "customerId"
    },
    "body": {
      "line1": "line1",
      "line2": "line2",
      "line3": "line3",
      "suburb": "suburb",
      "town": "town",
      "state": "state",
      "postcode": "postcode",
      "country": "country",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool