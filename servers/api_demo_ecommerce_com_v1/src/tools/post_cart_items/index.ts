import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_cart_items",
  "toolDescription": "Add item to cart",
  "baseUrl": "https://api.demo-ecommerce.com/v1",
  "path": "/cart/items",
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
      "product_id": "product_id",
      "quantity": "quantity"
    }
  },
  inputParamsSchema
}

export default tool