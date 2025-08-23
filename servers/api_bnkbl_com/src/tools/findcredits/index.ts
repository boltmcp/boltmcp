import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findcredits",
  "toolDescription": "List credits",
  "baseUrl": "https://api.bnkbl.com",
  "path": "/partner/credits",
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
      "number[]": "number[]",
      "state[]": "state[]",
      "amount_from": "amount_from",
      "amount_to": "amount_to",
      "currency[]": "currency[]",
      "installments": "installments",
      "client_id[]": "client_id[]"
    }
  },
  inputParamsSchema
}

export default tool