import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_checkout_revenue_analytics_analytics_checkout_revenue_get",
  "toolDescription": "Get Checkout Revenue Analytics",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/analytics/checkout-revenue",
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
      "bins": "bins",
      "tz": "tz",
      "start": "start",
      "stop": "stop",
      "treet_id": "treet_id",
      "hub_id": "hub_id",
      "pack_id": "pack_id",
      "ambassador_id": "ambassador_id"
    }
  },
  inputParamsSchema
}

export default tool