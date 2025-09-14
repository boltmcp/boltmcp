import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_payment_status_api_billing_check_payment_status_post",
  "toolDescription": "Check Payment Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/billing/check-payment-status",
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