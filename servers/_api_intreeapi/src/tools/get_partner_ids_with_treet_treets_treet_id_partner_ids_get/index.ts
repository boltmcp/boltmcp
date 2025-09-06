import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_partner_ids_with_treet_treets_treet_id_partner_ids_get",
  "toolDescription": "Get Partner Ids With Treet",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/treets/{treet_id}/partner-ids",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "treet_id": "treet_id"
    }
  },
  inputParamsSchema
}

export default tool