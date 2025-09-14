import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "request_withdrawal_api_affiliate_request_withdrawal_post",
  "toolDescription": "Request Withdrawal",
  "baseUrl": "https://api.example.com",
  "path": "/api/affiliate/request-withdrawal",
  "method": "post",
  "security": [],
  "paramsMap": {
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool