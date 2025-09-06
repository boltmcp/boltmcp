import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_packs_by_hub_hubs_hub_id_packs_get",
  "toolDescription": "Get Packs By Hub",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/hubs/{hub_id}/packs",
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
      "hub_id": "hub_id"
    },
    "query": {
      "sort_by": "sort_by",
      "limit": "limit",
      "token": "token",
      "id": "id",
      "price_period_start": "price_period_start",
      "price_period_end": "price_period_end",
      "category_id": "category_id",
      "search": "search",
      "include_draft": "include_draft",
      "embed_treet_count": "embed_treet_count",
      "embed_treet_owner_avatars": "embed_treet_owner_avatars",
      "embed_member_count": "embed_member_count",
      "embed_active_payment_count": "embed_active_payment_count",
      "embed_revenue": "embed_revenue",
      "embed_featured_treets": "embed_featured_treets"
    }
  },
  inputParamsSchema
}

export default tool