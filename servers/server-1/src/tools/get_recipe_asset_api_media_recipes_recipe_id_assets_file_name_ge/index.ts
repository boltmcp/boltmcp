import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_recipe_asset_api_media_recipes_recipe_id_assets_file_name_ge",
  "toolDescription": "Get Recipe Asset",
  "baseUrl": "https://api.example.com",
  "path": "/api/media/recipes/{recipe_id}/assets/{file_name}",
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