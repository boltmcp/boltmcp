import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "stripe_webhook_stripe_webhook_post",
  "toolDescription": "Stripe Webhook",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/stripe/webhook",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "object": "object",
      "account": "account",
      "created": "created",
      "data": "data",
      "livemode": "livemode",
      "type": "type"
    },
    "header": {
      "Stripe-Signature": "Stripe-Signature"
    }
  },
  inputParamsSchema
}

export default tool