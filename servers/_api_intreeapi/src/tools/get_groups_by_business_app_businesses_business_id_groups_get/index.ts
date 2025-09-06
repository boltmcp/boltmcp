import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_groups_by_business_app_businesses_business_id_groups_get",
  "toolDescription": "Get Groups By Business App",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.1/businesses/{business_id}/groups",
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
      "business_id": "business_id"
    },
    "query": {
      "sort_by": "sort_by",
      "limit": "limit",
      "token": "token",
      "id": "id",
      "search": "search",
      "is_member": "is_member",
      "embed_treet_count": "embed_treet_count",
      "embed_treet_owner_avatars": "embed_treet_owner_avatars",
      "embed_featured_treets": "embed_featured_treets"
    }
  },
  inputParamsSchema
}

export default tool