import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suggest_recipes_api_explore_groups_group_slug_recipes_suggestion",
  "toolDescription": "Suggest Recipes",
  "baseUrl": "https://api.example.com",
  "path": "/api/explore/groups/{group_slug}/recipes/suggestions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "group_slug": "group_slug"
    },
    "query": {
      "foods": "foods",
      "tools": "tools",
      "orderBy": "orderBy",
      "orderByNullPosition": "orderByNullPosition",
      "orderDirection": "orderDirection",
      "queryFilter": "queryFilter",
      "paginationSeed": "paginationSeed",
      "limit": "limit",
      "maxMissingFoods": "maxMissingFoods",
      "maxMissingTools": "maxMissingTools",
      "includeFoodsOnHand": "includeFoodsOnHand",
      "includeToolsOnHand": "includeToolsOnHand"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool