import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_businesses_you_are_member_of_me_businesses_get",
  "toolDescription": "Get Businesses You Are Member Of",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/me/businesses",
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
    "query": {
      "sort_by": "sort_by",
      "limit": "limit",
      "token": "token",
      "embed_business_profile": "embed_business_profile",
      "embed_business_member": "embed_business_member",
      "embed_total_app_members": "embed_total_app_members",
      "embed_preview_members": "embed_preview_members",
      "embed_has_unread": "embed_has_unread",
      "embed_categories": "embed_categories",
      "embed_locations": "embed_locations",
      "embed_apply_domains": "embed_apply_domains",
      "embed_org": "embed_org",
      "embed_ambassador_data": "embed_ambassador_data",
      "embed_has_ambassador_pack": "embed_has_ambassador_pack",
      "role": "role",
      "id": "id",
      "invite_status": "invite_status",
      "hub_type": "hub_type",
      "is_active": "is_active",
      "search": "search",
      "category_id": "category_id"
    }
  },
  inputParamsSchema
}

export default tool