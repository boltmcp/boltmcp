import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_treet_ids_with_partner_hubs_hub_id_partners_partner_id_treet",
  "toolDescription": "Get Treet Ids With Partner",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/hubs/{hub_id}/partners/{partner_id}/treet-ids",
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
      "hub_id": "hub_id",
      "partner_id": "partner_id"
    }
  },
  inputParamsSchema
}

export default tool