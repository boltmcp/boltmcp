import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_aspect_post_aspect_posts_post",
  "toolDescription": "Create Aspect Post",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/aspect-posts",
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
      "aspect_id": "aspect_id"
    }
  },
  inputParamsSchema
}

export default tool