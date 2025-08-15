import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tax_gettaxrate",
  "toolDescription": "Gets a tax rate as at the supplied effective date.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/taxrates/{taxRateId}/{effectiveDate}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "taxRateId": "taxRateId",
      "effectiveDate": "effectiveDate"
    }
  },
  inputParamsSchema
}

export default tool