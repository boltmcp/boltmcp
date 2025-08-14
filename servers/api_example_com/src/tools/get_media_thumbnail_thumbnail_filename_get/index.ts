import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_media_thumbnail_thumbnail_filename_get",
  "toolDescription": "Get Media Thumbnail",
  "baseUrl": "https://api.example.com",
  "path": "/thumbnail/{filename}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "filename": "filename"
    }
  },
  inputParamsSchema
}

export default tool