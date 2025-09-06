import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "factory_all_factory_post",
  "toolDescription": "Factory All",
  "baseUrl": "/api/intreeapi",
  "path": "/factory",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "total_users": "total_users",
      "aspects_per_user": "aspects_per_user",
      "relations_per_user": "relations_per_user",
      "create_avatar_images": "create_avatar_images",
      "create_cover_images": "create_cover_images"
    }
  },
  inputParamsSchema
}

export default tool