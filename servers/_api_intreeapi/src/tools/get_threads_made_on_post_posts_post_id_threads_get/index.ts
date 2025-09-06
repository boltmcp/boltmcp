import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_threads_made_on_post_posts_post_id_threads_get",
  "toolDescription": "Get Threads Made On Post",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/posts/{post_id}/threads",
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
      "post_id": "post_id"
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