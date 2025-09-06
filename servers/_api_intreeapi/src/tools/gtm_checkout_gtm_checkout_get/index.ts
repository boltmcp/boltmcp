import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gtm_checkout_gtm_checkout_get",
  "toolDescription": "Gtm Checkout",
  "baseUrl": "/api/intreeapi",
  "path": "/gtm/checkout",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "hub_id": "hub_id",
      "coupon": "coupon",
      "value": "value",
      "currency": "currency"
    }
  },
  inputParamsSchema
}

export default tool