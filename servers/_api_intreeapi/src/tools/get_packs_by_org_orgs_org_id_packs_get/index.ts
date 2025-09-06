import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_packs_by_org_orgs_org_id_packs_get",
  "toolDescription": "Get Packs By Org",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/orgs/{org_id}/packs",
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
      "org_id": "org_id"
    },
    "query": {
      "sort_by": "sort_by",
      "limit": "limit",
      "token": "token",
      "id": "id",
      "pack_type": "pack_type",
      "embed_treet_count": "embed_treet_count",
      "embed_treet_owner_avatars": "embed_treet_owner_avatars",
      "embed_member_count": "embed_member_count",
      "embed_claim_count": "embed_claim_count",
      "embed_origin_business": "embed_origin_business"
    }
  },
  inputParamsSchema
}

export default tool