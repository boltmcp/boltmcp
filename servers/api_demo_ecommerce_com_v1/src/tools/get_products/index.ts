import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_products",
  "toolDescription": "List all products with filters",
  "baseUrl": "https://api.demo-ecommerce.com/v1",
  "path": "/products",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "category": "category",
      "search": "search",
      "min_price": "min_price",
      "max_price": "max_price"
    }
  },
  inputParamsSchema
}

export default tool