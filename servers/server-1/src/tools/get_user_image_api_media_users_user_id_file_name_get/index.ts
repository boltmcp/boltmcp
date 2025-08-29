import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_user_image_api_media_users_user_id_file_name_get",
  "toolDescription": "Get User Image",
  "baseUrl": "https://api.example.com",
  "path": "/api/media/users/{user_id}/{file_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "user_id": "user_id",
      "file_name": "file_name"
    }
  },
  inputParamsSchema
}

export default tool