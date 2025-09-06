import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_gallery_item_from_biz_profile_biz_profile_gallery_media_i",
  "toolDescription": "Remove Gallery Item From Biz Profile",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-profile-gallery/{media_id}",
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