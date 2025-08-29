import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_one_api_explore_groups_group_slug_organizers_categories_item",
  "toolDescription": "Get One",
  "baseUrl": "https://api.example.com",
  "path": "/api/explore/groups/{group_slug}/organizers/categories/{item_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "item_id": "item_id",
      "group_slug": "group_slug"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool