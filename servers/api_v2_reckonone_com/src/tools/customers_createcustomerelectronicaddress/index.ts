import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customers_createcustomerelectronicaddress",
  "toolDescription": "Adds a new electronic address to an existing customer.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/customers/{customerId}/electronicAddresses",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "customerId": "customerId"
    },
    "body": {
      "type": "type",
      "address": "address"
    }
  },
  inputParamsSchema
}

export default tool