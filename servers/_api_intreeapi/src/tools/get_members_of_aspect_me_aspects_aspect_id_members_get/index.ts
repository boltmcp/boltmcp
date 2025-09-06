import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_members_of_aspect_me_aspects_aspect_id_members_get",
  "toolDescription": "Get Members Of Aspect",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/me/aspects/{aspect_id}/members",
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
      "aspect_id": "aspect_id"
    },
    "query": {
      "embed_member": "embed_member",
      "limit": "limit",
      "token": "token",
      "sort_by": "sort_by"
    }
  },
  inputParamsSchema
}

export default tool