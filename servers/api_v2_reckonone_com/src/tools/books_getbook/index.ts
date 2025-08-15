import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "books_getbook",
  "toolDescription": "Gets details of the specified book.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/books/{bookId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    }
  },
  inputParamsSchema
}

export default tool