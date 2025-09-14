import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "handle_midtrans_webhook_api_billing_webhook_post",
  "toolDescription": "Handle Midtrans Webhook",
  "baseUrl": "https://api.example.com",
  "path": "/api/billing/webhook",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool