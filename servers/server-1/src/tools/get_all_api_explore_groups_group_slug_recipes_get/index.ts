import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_api_explore_groups_group_slug_recipes_get",
  "toolDescription": "Get All",
  "baseUrl": "https://api.example.com",
  "path": "/api/explore/groups/{group_slug}/recipes",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "group_slug": "group_slug"
    },
    "query": {
      "categories": "categories",
      "tags": "tags",
      "tools": "tools",
      "foods": "foods",
      "households": "households",
      "orderBy": "orderBy",
      "orderByNullPosition": "orderByNullPosition",
      "orderDirection": "orderDirection",
      "queryFilter": "queryFilter",
      "paginationSeed": "paginationSeed",
      "page": "page",
      "perPage": "perPage",
      "cookbook": "cookbook",
      "requireAllCategories": "requireAllCategories",
      "requireAllTags": "requireAllTags",
      "requireAllTools": "requireAllTools",
      "requireAllFoods": "requireAllFoods",
      "search": "search"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool