import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "share_treets_with_partner_partners_treets_post",
  "toolDescription": "Share Treets With Partner",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/partners/treets",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "partner_id": "partner_id",
      "hub_id": "hub_id",
      "treet_ids": "treet_ids"
    }
  },
  inputParamsSchema
}

export default tool