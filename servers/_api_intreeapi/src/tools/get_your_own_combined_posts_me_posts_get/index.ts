import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_your_own_combined_posts_me_posts_get",
  "toolDescription": "Get Your Own Combined Posts",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/me/posts",
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
    "query": {
      "limit": "limit",
      "token": "token",
      "embed_gallery": "embed_gallery",
      "post_type": "post_type"
    }
  },
  inputParamsSchema
}

export default tool