import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliers_deleteelectronicaddress",
  "toolDescription": "Deletes an existing supplier's electronic address.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliers/{supplierId}/electronicAddresses/{type}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "supplierId": "supplierId",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool