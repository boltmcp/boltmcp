import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superstreams_getunlinkedpayruntransactions",
  "toolDescription": "Gets a list of unlinked super transactions for a super stream batch.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superstreams/unlinkedsupertransactions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "query": {
      "fromDate": "fromDate",
      "toDate": "toDate",
      "page": "page",
      "perPage": "perPage"
    }
  },
  inputParamsSchema
}

export default tool