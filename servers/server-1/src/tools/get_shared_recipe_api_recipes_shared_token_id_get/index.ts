import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_shared_recipe_api_recipes_shared_token_id_get",
  "toolDescription": "Get Shared Recipe",
  "baseUrl": "https://api.example.com",
  "path": "/api/recipes/shared/{token_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "token_id": "token_id"
    }
  },
  inputParamsSchema
}

export default tool