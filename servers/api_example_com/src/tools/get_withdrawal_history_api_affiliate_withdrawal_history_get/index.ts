import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_withdrawal_history_api_affiliate_withdrawal_history_get",
  "toolDescription": "Get Withdrawal History",
  "baseUrl": "https://api.example.com",
  "path": "/api/affiliate/withdrawal-history",
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