import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliers_createsupplierelectronicaddress",
  "toolDescription": "Adds a new electronic address to an existing supplier.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliers/{supplierId}/electronicAddresses",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "supplierId": "supplierId"
    },
    "body": {
      "type": "type",
      "address": "address"
    }
  },
  inputParamsSchema
}

export default tool