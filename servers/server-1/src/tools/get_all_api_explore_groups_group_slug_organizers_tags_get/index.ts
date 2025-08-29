import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_api_explore_groups_group_slug_organizers_tags_get",
  "toolDescription": "Get All",
  "baseUrl": "https://api.example.com",
  "path": "/api/explore/groups/{group_slug}/organizers/tags",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "group_slug": "group_slug"
    },
    "query": {
      "search": "search",
      "orderBy": "orderBy",
      "orderByNullPosition": "orderByNullPosition",
      "orderDirection": "orderDirection",
      "queryFilter": "queryFilter",
      "paginationSeed": "paginationSeed",
      "page": "page",
      "perPage": "perPage"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool