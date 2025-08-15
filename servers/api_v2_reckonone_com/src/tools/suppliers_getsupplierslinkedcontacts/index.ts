import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliers_getsupplierslinkedcontacts",
  "toolDescription": "Gets the supplier's linked contacts.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliers/{supplierId}/contacts",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "supplierId": "supplierId"
    },
    "query": {
      "page": "page",
      "perPage": "perPage"
    }
  },
  inputParamsSchema
}

export default tool