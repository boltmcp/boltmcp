import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superfunds_deletesuperfundphonenumber",
  "toolDescription": "Deletes an existing super fund phone number.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superfunds/{superfundId}/phoneNumbers/{type}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "superfundId": "superfundId",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool