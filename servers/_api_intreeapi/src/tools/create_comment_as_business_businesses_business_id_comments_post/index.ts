import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_comment_as_business_businesses_business_id_comments_post",
  "toolDescription": "Create Comment As Business",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/comments",
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
      "thread_id": "thread_id"
    }
  },
  inputParamsSchema
}

export default tool