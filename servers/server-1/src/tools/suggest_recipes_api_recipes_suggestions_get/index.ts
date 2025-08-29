import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suggest_recipes_api_recipes_suggestions_get",
  "toolDescription": "Suggest Recipes",
  "baseUrl": "https://api.example.com",
  "path": "/api/recipes/suggestions",
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