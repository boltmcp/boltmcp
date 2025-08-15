import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "templates_getcustomeradjustmentnotestemplate",
  "toolDescription": "Gets a customer adjustment note template for the specified book.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/templates/customerAdjustmentNotes/{templateId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "templateId": "templateId"
    }
  },
  inputParamsSchema
}

export default tool