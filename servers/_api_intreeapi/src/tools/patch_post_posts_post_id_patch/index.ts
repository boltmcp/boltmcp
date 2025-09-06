import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_post_posts_post_id_patch",
  "toolDescription": "Patch Post",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/posts/{post_id}",
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
      "post_id": "post_id"
    },
    "body": {
      "content": "content"
    }
  },
  inputParamsSchema
}

export default tool