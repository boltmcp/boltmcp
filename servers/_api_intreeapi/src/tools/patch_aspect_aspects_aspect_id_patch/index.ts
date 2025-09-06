import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_aspect_aspects_aspect_id_patch",
  "toolDescription": "Patch Aspect",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/aspects/{aspect_id}",
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
      "aspect_id": "aspect_id"
    },
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
      "use_profile_image": "use_profile_image"
    }
  },
  inputParamsSchema
}

export default tool