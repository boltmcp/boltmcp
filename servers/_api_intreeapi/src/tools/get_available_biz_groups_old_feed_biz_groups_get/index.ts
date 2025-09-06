import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_available_biz_groups_old_feed_biz_groups_get",
  "toolDescription": "Get Available Biz Groups Old",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/feed/biz-groups",
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
      "id": "id",
      "search": "search",
      "is_member": "is_member",
      "is_member_first": "is_member_first",
      "category_id": "category_id",
      "embed_treet_count": "embed_treet_count",
      "embed_treet_owner_avatars": "embed_treet_owner_avatars",
      "embed_origin_business": "embed_origin_business",
      "embed_total_members": "embed_total_members",
      "embed_subscription_data": "embed_subscription_data",
      "embed_featured_treets": "embed_featured_treets"
    }
  },
  inputParamsSchema
}

export default tool