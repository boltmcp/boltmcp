import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hide_or_unhide_post_posts_post_id_hide_patch",
  "toolDescription": "Hide Or Unhide Post",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/posts/{post_id}/hide",
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
      "hide": "hide"
    }
  },
  inputParamsSchema
}

export default tool