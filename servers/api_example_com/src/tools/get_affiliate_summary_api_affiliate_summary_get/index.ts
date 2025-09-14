import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_affiliate_summary_api_affiliate_summary_get",
  "toolDescription": "Get Affiliate Summary",
  "baseUrl": "https://api.example.com",
  "path": "/api/affiliate/summary",
  "method": "get",
  "security": [],
  "paramsMap": {
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool