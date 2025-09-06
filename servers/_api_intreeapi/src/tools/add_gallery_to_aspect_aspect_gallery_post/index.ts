import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_gallery_to_aspect_aspect_gallery_post",
  "toolDescription": "Add Gallery To Aspect",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/aspect-gallery",
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
      "aspect_id": "aspect_id",
      "gallery_ids": "gallery_ids"
    }
  },
  inputParamsSchema
}

export default tool