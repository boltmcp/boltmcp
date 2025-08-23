import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpricebreakdown",
  "toolDescription": "Get invoice finance price breakdown",
  "baseUrl": "https://api.bnkbl.com",
  "path": "/partner/invoice/price-breakdown",
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
      "debtor_country_code": "debtor_country_code",
      "debtor_crn": "debtor_crn",
      "issuer_country_code": "issuer_country_code",
      "issuer_crn": "issuer_crn",
      "face_value": "face_value",
      "due_date": "due_date"
    }
  },
  inputParamsSchema
}

export default tool