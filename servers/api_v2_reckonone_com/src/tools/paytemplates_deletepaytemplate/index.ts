import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "paytemplates_deletepaytemplate",
  "toolDescription": "Deletes the pay template into the database.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/paytemplates/{paytemplateId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "paytemplateId": "paytemplateId"
    }
  },
  inputParamsSchema
}

export default tool