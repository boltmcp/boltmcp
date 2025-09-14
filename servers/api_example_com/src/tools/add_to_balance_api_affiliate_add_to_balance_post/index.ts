import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_to_balance_api_affiliate_add_to_balance_post",
  "toolDescription": "Add To Balance",
  "baseUrl": "https://api.example.com",
  "path": "/api/affiliate/add-to-balance",
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