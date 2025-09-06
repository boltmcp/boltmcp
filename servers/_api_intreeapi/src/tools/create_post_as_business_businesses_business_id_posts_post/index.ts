import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_post_as_business_businesses_business_id_posts_post",
  "toolDescription": "Create Post As Business",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/posts",
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
    "path": {
      "business_id": "business_id"
    },
    "body": {
      "content": "content",
      "gallery_ids": "gallery_ids",
      "created_at": "created_at"
    }
  },
  inputParamsSchema
}

export default tool