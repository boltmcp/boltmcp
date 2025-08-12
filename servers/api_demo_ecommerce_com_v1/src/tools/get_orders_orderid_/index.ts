import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_orders_orderid_",
  "toolDescription": "Get order details",
  "baseUrl": "https://api.demo-ecommerce.com/v1",
  "path": "/orders/{orderId}",
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
    "path": {
      "orderId": "orderId"
    }
  },
  inputParamsSchema
}

export default tool