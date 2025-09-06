import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_comment_comments_comment_id_patch",
  "toolDescription": "Update Comment",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/comments/{comment_id}",
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
      "comment_id": "comment_id"
    },
    "body": {
      "content": "content"
    }
  },
  inputParamsSchema
}

export default tool