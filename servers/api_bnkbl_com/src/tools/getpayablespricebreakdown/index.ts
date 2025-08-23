import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpayablespricebreakdown",
  "toolDescription": "Get payables finance price breakdown",
  "baseUrl": "https://api.bnkbl.com",
  "path": "/partner/payables/price-breakdown",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "id": "id",
      "financing_amount": "financing_amount",
      "repayment_method": "repayment_method"
    }
  },
  inputParamsSchema
}

export default tool