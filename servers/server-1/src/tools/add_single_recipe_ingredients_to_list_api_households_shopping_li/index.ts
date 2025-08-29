import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_single_recipe_ingredients_to_list_api_households_shopping_li",
  "toolDescription": "Add Single Recipe Ingredients To List",
  "baseUrl": "https://api.example.com",
  "path": "/api/households/shopping/lists/{item_id}/recipe/{recipe_id}",
  "method": "post",
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
    "path": {
      "item_id": "item_id",
      "recipe_id": "recipe_id"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool