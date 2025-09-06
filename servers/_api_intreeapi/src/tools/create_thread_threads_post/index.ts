import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_thread_threads_post",
  "toolDescription": "Create Thread",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/threads",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "post_id": "post_id",
      "comment": "comment"
    }
  },
  inputParamsSchema
}

export default tool