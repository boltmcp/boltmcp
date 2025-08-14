import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_media_images_filename_get",
  "toolDescription": "Get Media",
  "baseUrl": "https://api.example.com",
  "path": "/images/{filename}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "filename": "filename"
    },
    "query": {
      "thumbnail": "thumbnail"
    }
  },
  inputParamsSchema
}

export default tool