import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_api_recipes_get",
  "toolDescription": "Get All",
  "baseUrl": "https://api.example.com",
  "path": "/api/recipes",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
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