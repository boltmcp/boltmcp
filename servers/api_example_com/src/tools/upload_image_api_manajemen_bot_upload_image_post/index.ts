import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upload_image_api_manajemen_bot_upload_image_post",
  "toolDescription": "Upload Image",
  "baseUrl": "https://api.example.com",
  "path": "/api/manajemen-bot/upload-image",
  "method": "post",
  "security": [],
  "paramsMap": {
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool