import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_partners_businesses_business_id_partners_get",
  "toolDescription": "Get Partners",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/partners",
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
      "business_id": "business_id"
    },
    "query": {
      "limit": "limit",
      "token": "token",
      "partnership_id": "partnership_id",
      "partner_id": "partner_id",
      "search": "search",
      "embed_logo_image": "embed_logo_image",
      "embed_cover_image": "embed_cover_image",
      "embed_contacts": "embed_contacts",
      "embed_member_count": "embed_member_count",
      "embed_shared_treets_count": "embed_shared_treets_count",
      "embed_active_users": "embed_active_users",
      "embed_lifetime_redeems": "embed_lifetime_redeems",
      "embed_weekly_distributes_made": "embed_weekly_distributes_made"
    }
  },
  inputParamsSchema
}

export default tool