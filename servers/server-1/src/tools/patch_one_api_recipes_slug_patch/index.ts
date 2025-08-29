import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_one_api_recipes_slug_patch",
  "toolDescription": "Patch One",
  "baseUrl": "https://api.example.com",
  "path": "/api/recipes/{slug}",
  "method": "patch",
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
      "slug": "slug"
    },
    "body": {
      "id": "id",
      "userId": "userId",
      "householdId": "householdId",
      "groupId": "groupId",
      "name": "name",
      "slug": "b_slug",
      "image": "image",
      "recipeServings": "recipeServings",
      "recipeYieldQuantity": "recipeYieldQuantity",
      "recipeYield": "recipeYield",
      "totalTime": "totalTime",
      "prepTime": "prepTime",
      "cookTime": "cookTime",
      "performTime": "performTime",
      "description": "description",
      "recipeCategory": "recipeCategory",
      "tags": "tags",
      "tools": "tools",
      "rating": "rating",
      "orgURL": "orgURL",
      "dateAdded": "dateAdded",
      "dateUpdated": "dateUpdated",
      "createdAt": "createdAt",
      "update_at": "update_at",
      "lastMade": "lastMade",
      "recipeIngredient": "recipeIngredient",
      "recipeInstructions": "recipeInstructions",
      "nutrition": "nutrition",
      "settings": "settings",
      "assets": "assets",
      "notes": "notes",
      "extras": "extras",
      "comments": "comments"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool