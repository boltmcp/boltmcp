import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_recipe_api_explore_groups_group_slug_recipes_recipe_slug_get",
  "toolDescription": "Get Recipe",
  "baseUrl": "https://api.example.com",
  "path": "/api/explore/groups/{group_slug}/recipes/{recipe_slug}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "recipe_slug": "recipe_slug",
      "group_slug": "group_slug"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool