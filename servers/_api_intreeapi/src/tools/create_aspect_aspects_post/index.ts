import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_aspect_aspects_post",
  "toolDescription": "Create Aspect",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/aspects",
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
      "website_url": "website_url",
      "phone": "phone",
      "video_url": "video_url",
      "email": "email",
      "description": "description",
      "icon_image_id": "icon_image_id",
      "cover_image_id": "cover_image_id",
      "tags": "tags",
      "title": "title",
      "use_profile_image": "use_profile_image",
      "gallery_ids": "gallery_ids",
      "member_ids": "member_ids"
    }
  },
  inputParamsSchema
}

export default tool