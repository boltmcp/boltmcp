import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_aspects_from_your_feed_feed_aspects_get",
  "toolDescription": "Get Aspects From Your Feed",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/feed/aspects",
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
      "embed_icon_image": "embed_icon_image",
      "embed_cover_image": "embed_cover_image",
      "embed_recent_posts": "embed_recent_posts",
      "embed_owner": "embed_owner",
      "embed_gallery": "embed_gallery",
      "id": "id",
      "owner_id": "owner_id",
      "feed_preference": "feed_preference"
    }
  },
  inputParamsSchema
}

export default tool