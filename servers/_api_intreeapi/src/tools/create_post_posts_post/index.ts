import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_post_posts_post",
  "toolDescription": "Create Post",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/posts",
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
      "content": "content",
      "gallery_ids": "gallery_ids",
      "aspect_ids": "aspect_ids",
      "business_id": "business_id"
    }
  },
  inputParamsSchema
}

export default tool