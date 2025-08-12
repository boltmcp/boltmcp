import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_checkout",
  "toolDescription": "Checkout and place order",
  "baseUrl": "https://api.demo-ecommerce.com/v1",
  "path": "/checkout",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "address_id": "address_id",
      "payment_method_id": "payment_method_id"
    }
  },
  inputParamsSchema
}

export default tool