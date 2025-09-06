import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_relation_relations_post",
  "toolDescription": "Create Relation",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/relations",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "invite_id": "invite_id",
      "invite_link_id": "invite_link_id"
    }
  },
  inputParamsSchema
}

export default tool