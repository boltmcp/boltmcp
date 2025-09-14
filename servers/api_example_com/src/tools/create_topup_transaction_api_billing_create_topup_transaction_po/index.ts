import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_topup_transaction_api_billing_create_topup_transaction_po",
  "toolDescription": "Create Topup Transaction",
  "baseUrl": "https://api.example.com",
  "path": "/api/billing/create-topup-transaction",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "amount": "amount"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool