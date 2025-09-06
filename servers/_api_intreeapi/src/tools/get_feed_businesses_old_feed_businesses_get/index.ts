import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_feed_businesses_old_feed_businesses_get",
  "toolDescription": "Get Feed Businesses Old",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/feed/businesses",
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
      "web_domain": "web_domain",
      "only_show_owned": "only_show_owned",
      "only_show_joined": "only_show_joined",
      "search": "search",
      "enable_feed": "enable_feed",
      "enable_app_user_post": "enable_app_user_post",
      "category_id": "category_id",
      "embed_preview_members": "embed_preview_members",
      "embed_app_owner": "embed_app_owner",
      "embed_is_ambassador": "embed_is_ambassador",
      "embed_total_passes": "embed_total_passes",
      "embed_total_posts": "embed_total_posts"
    }
  },
  inputParamsSchema
}

export default tool