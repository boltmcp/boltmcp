import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_household_preferences_api_households_preferences_put",
  "toolDescription": "Update Household Preferences",
  "baseUrl": "https://api.example.com",
  "path": "/api/households/preferences",
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
    "body": {
      "privateHousehold": "privateHousehold",
      "lockRecipeEditsFromOtherHouseholds": "lockRecipeEditsFromOtherHouseholds",
      "firstDayOfWeek": "firstDayOfWeek",
      "recipePublic": "recipePublic",
      "recipeShowNutrition": "recipeShowNutrition",
      "recipeShowAssets": "recipeShowAssets",
      "recipeLandscapeView": "recipeLandscapeView",
      "recipeDisableComments": "recipeDisableComments",
      "recipeDisableAmount": "recipeDisableAmount"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool