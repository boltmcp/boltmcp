import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reports_getsupercontributionsbyemployeereportget",
  "toolDescription": "Gets the super contributions by employee report.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/reports/superContributionsbyEmployee",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "query": {
      "parameters": "parameters",
      "format": "format",
      "download": "download"
    }
  },
  inputParamsSchema
}

export default tool