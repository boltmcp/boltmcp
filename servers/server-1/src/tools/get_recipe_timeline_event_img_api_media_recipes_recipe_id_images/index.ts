import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_recipe_timeline_event_img_api_media_recipes_recipe_id_images",
  "toolDescription": "Get Recipe Timeline Event Img",
  "baseUrl": "https://api.example.com",
  "path": "/api/media/recipes/{recipe_id}/images/timeline/{timeline_event_id}/{file_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "recipe_id": "recipe_id",
      "timeline_event_id": "timeline_event_id",
      "file_name": "file_name"
    }
  },
  inputParamsSchema
}

export default tool