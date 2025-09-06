import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_relation_relations_relation_id_get",
  "toolDescription": "Get Relation",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/relations/{relation_id}",
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
    "path": {
      "relation_id": "relation_id"
    }
  },
  inputParamsSchema
}

export default tool