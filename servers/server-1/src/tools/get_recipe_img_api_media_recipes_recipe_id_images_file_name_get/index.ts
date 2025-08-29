import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_recipe_img_api_media_recipes_recipe_id_images_file_name_get",
  "toolDescription": "Get Recipe Img",
  "baseUrl": "https://api.example.com",
  "path": "/api/media/recipes/{recipe_id}/images/{file_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "recipe_id": "recipe_id",
      "file_name": "file_name"
    }
  },
  inputParamsSchema
}

export default tool