import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bills_getbillssummary",
  "toolDescription": "Gets the summary details of bills.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/bills/summary",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "query": {
      "baseDate": "baseDate"
    }
  },
  inputParamsSchema
}

export default tool