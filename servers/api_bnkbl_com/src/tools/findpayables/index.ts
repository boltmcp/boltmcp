import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findpayables",
  "toolDescription": "List payables",
  "baseUrl": "https://api.bnkbl.com",
  "path": "/partner/payables",
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
      "sort_by": "sort_by",
      "descending": "descending",
      "id[]": "id[]",
      "state[]": "state[]",
      "client_id[]": "client_id[]",
      "total_requested_amount_from": "total_requested_amount_from",
      "total_requested_amount_to": "total_requested_amount_to",
      "currency[]": "currency[]"
    }
  },
  inputParamsSchema
}

export default tool