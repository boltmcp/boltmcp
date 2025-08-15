import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "estimates_deleteestimate",
  "toolDescription": "Deletes an existing estimate.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/estimates/{estimateId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "estimateId": "estimateId"
    }
  },
  inputParamsSchema
}

export default tool