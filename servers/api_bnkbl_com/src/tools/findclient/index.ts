import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findclient",
  "toolDescription": "List clients",
  "baseUrl": "https://api.bnkbl.com",
  "path": "/partner/clients",
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
      "limit": "limit",
      "offset": "offset",
      "id": "id",
      "state": "state",
      "missing_bank_details": "missing_bank_details",
      "crn": "crn",
      "product_id": "product_id"
    }
  },
  inputParamsSchema
}

export default tool