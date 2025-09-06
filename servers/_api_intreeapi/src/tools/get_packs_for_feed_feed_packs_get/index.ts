import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_packs_for_feed_feed_packs_get",
  "toolDescription": "Get Packs For Feed",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.1/feed/packs",
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
      "title": "title",
      "is_member": "is_member",
      "is_member_first": "is_member_first",
      "category_id": "category_id",
      "embed_total_members": "embed_total_members",
      "embed_subscription_data": "embed_subscription_data",
      "embed_featured_treets": "embed_featured_treets",
      "embed_treet_count": "embed_treet_count",
      "embed_treet_owner_avatars": "embed_treet_owner_avatars"
    }
  },
  inputParamsSchema
}

export default tool