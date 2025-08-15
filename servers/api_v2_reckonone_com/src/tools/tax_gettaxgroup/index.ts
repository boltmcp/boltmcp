import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tax_gettaxgroup",
  "toolDescription": "Gets a tax group with tax rates as at the supplied effective date.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/taxgroups/{taxGroupId}/{effectiveDate}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "taxGroupId": "taxGroupId",
      "effectiveDate": "effectiveDate"
    }
  },
  inputParamsSchema
}

export default tool