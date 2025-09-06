import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_threads_made_on_biz_post_businesses_business_id_posts_post_i",
  "toolDescription": "Get Threads Made On Biz Post",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/posts/{post_id}/threads",
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
      "post_id": "post_id",
      "business_id": "business_id"
    },
    "query": {
      "limit": "limit",
      "token": "token",
      "embed_recent_comment": "embed_recent_comment",
      "embed_initial_comment": "embed_initial_comment",
      "embed_number_of_comments": "embed_number_of_comments",
      "embed_author": "embed_author",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool