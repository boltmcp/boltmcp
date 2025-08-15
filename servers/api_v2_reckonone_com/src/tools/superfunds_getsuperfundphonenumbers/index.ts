import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superfunds_getsuperfundphonenumbers",
  "toolDescription": "Gets a super fund's phone numbers.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superfunds/{superfundId}/phoneNumbers",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "superfundId": "superfundId"
    }
  },
  inputParamsSchema
}

export default tool