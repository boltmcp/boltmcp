import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_comments_by_thread_id_threads_thread_id_comments_get",
  "toolDescription": "Get Comments By Thread Id",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/threads/{thread_id}/comments",
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
      "thread_id": "thread_id"
    },
    "query": {
      "limit": "limit",
      "token": "token",
      "embed_author": "embed_author"
    }
  },
  inputParamsSchema
}

export default tool