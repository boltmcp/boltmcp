import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_aspects_user_can_see_me_users_user_id_aspects_get",
  "toolDescription": "Get Aspects User Can See",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/me/users/{user_id}/aspects",
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
    "path": {
      "user_id": "user_id"
    },
    "query": {
      "limit": "limit",
      "token": "token",
      "embed_icon_image": "embed_icon_image",
      "embed_cover_image": "embed_cover_image",
      "embed_recent_posts": "embed_recent_posts",
      "embed_preview_members": "embed_preview_members",
      "embed_gallery": "embed_gallery"
    }
  },
  inputParamsSchema
}

export default tool