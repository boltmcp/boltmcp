import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_post_in_business_businesses_business_id_posts_post_id_pat",
  "toolDescription": "Update Post In Business",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/posts/{post_id}",
  "method": "patch",
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
    "body": {
      "content": "content"
    }
  },
  inputParamsSchema
}

export default tool