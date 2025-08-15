import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "items_deleteitem",
  "toolDescription": "Deletes an existing item.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/items/{itemId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "itemId": "itemId"
    }
  },
  inputParamsSchema
}

export default tool