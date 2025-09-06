import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_your_own_aspects_me_aspects_get",
  "toolDescription": "Get Your Own Aspects",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/me/aspects",
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
      "sort_by": "sort_by",
      "limit": "limit",
      "token": "token",
      "embed_icon_image": "embed_icon_image",
      "embed_cover_image": "embed_cover_image",
      "embed_recent_posts": "embed_recent_posts",
      "embed_preview_members": "embed_preview_members",
      "embed_gallery": "embed_gallery",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool