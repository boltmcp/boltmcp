import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "books_getbooks",
  "toolDescription": "Gets a list of books that the current user has access to.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/books",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool