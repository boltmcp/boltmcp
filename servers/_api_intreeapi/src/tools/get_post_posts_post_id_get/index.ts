import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_post_posts_post_id_get",
  "toolDescription": "Get Post",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/posts/{post_id}",
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
    }
  },
  inputParamsSchema
}

export default tool