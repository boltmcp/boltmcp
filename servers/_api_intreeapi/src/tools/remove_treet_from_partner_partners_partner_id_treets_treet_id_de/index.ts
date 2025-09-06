import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_treet_from_partner_partners_partner_id_treets_treet_id_de",
  "toolDescription": "Remove Treet From Partner",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/partners/{partner_id}/treets/{treet_id}",
  "method": "delete",
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
      "partner_id": "partner_id",
      "treet_id": "treet_id"
    }
  },
  inputParamsSchema
}

export default tool