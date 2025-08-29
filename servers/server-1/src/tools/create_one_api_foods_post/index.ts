import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_one_api_foods_post",
  "toolDescription": "Create One",
  "baseUrl": "https://api.example.com",
  "path": "/api/foods",
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
    "body": {
      "id": "id",
      "name": "name",
      "pluralName": "pluralName",
      "description": "description",
      "extras": "extras",
      "labelId": "labelId",
      "aliases": "aliases",
      "householdsWithIngredientFood": "householdsWithIngredientFood"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool