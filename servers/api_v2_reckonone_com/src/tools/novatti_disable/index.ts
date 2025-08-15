import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "novatti_disable",
  "toolDescription": "Disables Novatti integration for a specific book.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/novatti/disable",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    }
  },
  inputParamsSchema
}

export default tool