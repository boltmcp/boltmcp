import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "classifications_deleteclassification",
  "toolDescription": "Deletes an existing classification.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/classifications/{classificationId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "classificationId": "classificationId"
    }
  },
  inputParamsSchema
}

export default tool