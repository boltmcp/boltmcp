import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "declinerepaymentplan",
  "toolDescription": "Decline repayment plan",
  "baseUrl": "https://api.bnkbl.com",
  "path": "/partner/payables/{id}/decline",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "decline_reason": "decline_reason"
    }
  },
  inputParamsSchema
}

export default tool