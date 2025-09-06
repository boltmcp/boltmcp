import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_thread_threads_thread_id_get",
  "toolDescription": "Get Thread",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/threads/{thread_id}",
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
      "check_post_access": "check_post_access"
    }
  },
  inputParamsSchema
}

export default tool