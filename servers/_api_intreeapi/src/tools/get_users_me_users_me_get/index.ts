import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_users_me_users_me_get",
  "toolDescription": "Get Users Me",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/users/me",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "embed_total_relations": "embed_total_relations",
      "embed_total_aspects": "embed_total_aspects",
      "embed_total_communities": "embed_total_communities",
      "embed_agrees_to_app_tos": "embed_agrees_to_app_tos"
    }
  },
  inputParamsSchema
}

export default tool