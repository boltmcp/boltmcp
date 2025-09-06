import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_your_contacts_me_contacts_get",
  "toolDescription": "Get Your Contacts",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/me/contacts",
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
      "sort_by": "sort_by",
      "limit": "limit",
      "token": "token",
      "embed_avatar_image": "embed_avatar_image",
      "embed_cover_image": "embed_cover_image",
      "id": "id",
      "relation_id": "relation_id",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool