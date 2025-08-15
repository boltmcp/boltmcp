import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliers_patchsupplierelectronicaddress",
  "toolDescription": "Updates selected fields of an existing supplier electronic address.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliers/{supplierId}/electronicAddresses/{type}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "supplierId": "supplierId",
      "type": "type"
    },
    "body": {
      "address": "address"
    }
  },
  inputParamsSchema
}

export default tool