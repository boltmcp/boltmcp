import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_posts_made_to_business_businesses_business_id_posts_get",
  "toolDescription": "Get Posts Made To Business",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/posts",
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
      "sort_by": "sort_by",
      "limit": "limit",
      "token": "token",
      "id": "id",
      "author_id": "author_id",
      "get_scheduled": "get_scheduled",
      "embed_post_author": "embed_post_author",
      "embed_post_gallery": "embed_post_gallery",
      "embed_comment_info": "embed_comment_info",
      "embed_biz_relation": "embed_biz_relation"
    }
  },
  inputParamsSchema
}

export default tool