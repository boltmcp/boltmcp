import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_owned_organizations_orgs_get",
  "toolDescription": "Get Owned Organizations",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/orgs",
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
      "id": "id",
      "embed_businesses": "embed_businesses",
      "embed_ambassador_data": "embed_ambassador_data",
      "embed_hub_data": "embed_hub_data"
    }
  },
  inputParamsSchema
}

export default tool