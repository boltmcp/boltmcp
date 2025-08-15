import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliers_getsupplierphonenumber",
  "toolDescription": "Get a supplier's phone number.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliers/{supplierId}/phoneNumbers/{type}",
  "method": "get",
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