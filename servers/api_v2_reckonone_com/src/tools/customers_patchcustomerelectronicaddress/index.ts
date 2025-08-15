import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customers_patchcustomerelectronicaddress",
  "toolDescription": "Updates selected fields of an existing customer electronic address.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/customers/{customerId}/electronicAddresses/{type}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "customerId": "customerId",
      "type": "type"
    },
    "body": {
      "address": "address"
    }
  },
  inputParamsSchema
}

export default tool