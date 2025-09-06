import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_gallery_item_from_aspect_aspect_gallery_media_id_delete",
  "toolDescription": "Remove Gallery Item From Aspect",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/aspect-gallery/{media_id}",
  "method": "delete",
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
      "media_id": "media_id"
    }
  },
  inputParamsSchema
}

export default tool