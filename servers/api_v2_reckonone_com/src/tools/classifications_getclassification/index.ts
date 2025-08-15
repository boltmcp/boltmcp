import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "classifications_getclassification",
  "toolDescription": "Gets a classification.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/classifications/{classificationId}",
  "method": "get",
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