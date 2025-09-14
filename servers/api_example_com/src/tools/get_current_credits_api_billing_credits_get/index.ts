import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_current_credits_api_billing_credits_get",
  "toolDescription": "Get Current Credits",
  "baseUrl": "https://api.example.com",
  "path": "/api/billing/credits",
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