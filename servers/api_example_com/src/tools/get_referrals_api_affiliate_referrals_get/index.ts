import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_referrals_api_affiliate_referrals_get",
  "toolDescription": "Get Referrals",
  "baseUrl": "https://api.example.com",
  "path": "/api/affiliate/referrals",
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