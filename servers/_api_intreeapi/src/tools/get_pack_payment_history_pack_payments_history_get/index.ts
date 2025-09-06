import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_pack_payment_history_pack_payments_history_get",
  "toolDescription": "Get Pack Payment History",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/pack-payments/history",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "token": "token",
      "embed_pack_subscription": "embed_pack_subscription"
    }
  },
  inputParamsSchema
}

export default tool