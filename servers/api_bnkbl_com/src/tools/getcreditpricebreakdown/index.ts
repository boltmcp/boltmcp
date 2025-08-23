import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcreditpricebreakdown",
  "toolDescription": "Get credit price breakdown",
  "baseUrl": "https://api.bnkbl.com",
  "path": "/partner/credit/price-breakdown",
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
      "country": "country",
      "registration_number": "registration_number"
    }
  },
  inputParamsSchema
}

export default tool