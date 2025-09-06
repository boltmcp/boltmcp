import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bulk_invite_bulk_invites_post",
  "toolDescription": "Bulk Invite",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/bulk-invites",
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
      "external_client_id": "external_client_id",
      "business_id": "business_id",
      "pack_id": "pack_id",
      "emails": "emails"
    }
  },
  inputParamsSchema
}

export default tool