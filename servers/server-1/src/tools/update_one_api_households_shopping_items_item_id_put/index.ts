import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_one_api_households_shopping_items_item_id_put",
  "toolDescription": "Update One",
  "baseUrl": "https://api.example.com",
  "path": "/api/households/shopping/items/{item_id}",
  "method": "put",
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
      "item_id": "item_id"
    },
    "body": {
      "quantity": "quantity",
      "unit": "unit",
      "food": "food",
      "note": "note",
      "isFood": "isFood",
      "disableAmount": "disableAmount",
      "display": "display",
      "shoppingListId": "shoppingListId",
      "checked": "checked",
      "position": "position",
      "foodId": "foodId",
      "labelId": "labelId",
      "unitId": "unitId",
      "extras": "extras",
      "recipeReferences": "recipeReferences"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool