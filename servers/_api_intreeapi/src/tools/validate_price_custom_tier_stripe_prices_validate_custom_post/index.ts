import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "validate_price_custom_tier_stripe_prices_validate_custom_post",
  "toolDescription": "Validate Price Custom Tier",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/stripe/prices/validate/custom",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "token": "token"
    }
  },
  inputParamsSchema
}

export default tool