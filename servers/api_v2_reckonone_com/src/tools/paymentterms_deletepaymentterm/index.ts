import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "paymentterms_deletepaymentterm",
  "toolDescription": "Deletes an existing payment term.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/terms/{termId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "termId": "termId"
    }
  },
  inputParamsSchema
}

export default tool