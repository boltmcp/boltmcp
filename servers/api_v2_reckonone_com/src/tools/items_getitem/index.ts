import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "items_getitem",
  "toolDescription": "Gets an item.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/items/{itemId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "itemId": "itemId"
    },
    "query": {
      "baseDate": "baseDate"
    }
  },
  inputParamsSchema
}

export default tool