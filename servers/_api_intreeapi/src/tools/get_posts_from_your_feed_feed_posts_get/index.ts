import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_posts_from_your_feed_feed_posts_get",
  "toolDescription": "Get Posts From Your Feed",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.1/feed/posts",
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
      "limit": "limit",
      "token": "token",
      "embed_author": "embed_author",
      "embed_gallery": "embed_gallery",
      "embed_aspects": "embed_aspects",
      "embed_business": "embed_business",
      "embed_recent_comment": "embed_recent_comment",
      "embed_state": "embed_state",
      "id": "id",
      "author_id": "author_id",
      "aspect_id": "aspect_id",
      "business_id": "business_id",
      "aspect_member_feed_preference": "aspect_member_feed_preference",
      "state": "state",
      "post_type": "post_type"
    }
  },
  inputParamsSchema
}

export default tool