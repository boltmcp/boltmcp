import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliers_unlinksupplierlinkedcontact",
  "toolDescription": "Unlinks a supplier's linked contact.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliers/{supplierId}/contacts/{contactId}/unlink",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "supplierId": "supplierId",
      "contactId": "contactId"
    }
  },
  inputParamsSchema
}

export default tool